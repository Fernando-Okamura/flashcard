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
  flashcards: { id: number, pergunta: string, resposta: string }[] = [];

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFlashcards();
  }

  fetchFlashcards(): void {
    this.http.get<{ id: number, pergunta: string, resposta: string }[]>('http://localhost:8080/all')
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
        this.flashcards.splice(index, 1);
      }
    }
  }

  confirmUpdate(flashcard: any) {
    if (confirm('Tem certeza que deseja atualizar este flashcard?')) {
      const newQuestion = prompt('Digite a nova pergunta:');
      const newAnswer = prompt('Digite a nova resposta:');
      if (newQuestion && newAnswer) {
        this.updateFlashcard(flashcard, newQuestion, newAnswer);
      }
    }
  }

  updateFlashcard(flashcard: any, newQuestion: string, newAnswer: string) {
    flashcard.pergunta = newQuestion;
    flashcard.resposta = newAnswer;
  }
}