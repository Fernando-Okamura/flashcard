import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.page.html',
  styleUrls: ['./decks.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule]
})
export class DecksPage implements OnInit {
  flashcards: { id: number, 
    pergunta: string, resposta: string, deckName: string }[] = [];

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFlashcards();
  }

  fetchFlashcards(): void {
    this.http.get<{ id: number, pergunta: string, resposta: string, deckName:string }[]>('http://localhost:8080/all')
      .subscribe(
        (data) => {
          this.flashcards = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
    
  isCardFlipped: { [key: string]: boolean } = { card1: false, card2: false };

  toggleCardRotation(cardId: string) {
    this.isCardFlipped[cardId] = !this.isCardFlipped[cardId];
  }
  confirmDelete(flashcard: any) {
    if (confirm('Tem certeza que deseja deletar este flashcard?')) {
      const index = this.flashcards.indexOf(flashcard);
      if (index !== -1) {
        // Chamada HTTP para deletar o flashcard no backend
        this.http.delete(`http://localhost:8080/excluir/${flashcard.id}`)
          .subscribe(
            () => {
              this.flashcards.splice(index, 1);
            },
            (error) => {
              console.error('Error deleting flashcard:', error);
            }
          );
      }
    }
  }
  confirmUpdate(flashcard: any) {
    if (confirm('Tem certeza que deseja atualizar este flashcard?')) {
      flashcard.pergunta = prompt('Digite a nova pergunta:');
      flashcard.resposta = prompt('Digite a nova resposta:');
      flashcard.deckName = prompt('Digite o nome do deck:');

      if (flashcard.pergunta && flashcard.resposta) {
        this.updateFlashcard(flashcard);
      }
    }
  }

  updateFlashcard(flashcard:any) {
    this.http.put(`http://localhost:8080/` + flashcard.id, flashcard )
      .subscribe(
        () => {
          // Atualiza os flashcards após a atualização bem-sucedida
          this.fetchFlashcards();
        },
        (error) => {
          console.error('Error updating flashcard:', error);
        }
      );
  }
}