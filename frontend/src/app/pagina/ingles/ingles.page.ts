import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.page.html',
  styleUrls: ['./ingles.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule]
})
export class InglesPage implements OnInit {
  flashcards: { id: number, pergunta: string, resposta: string }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFlashcards();
  }

  fetchFlashcards(): void {
    this.http.get<{ id: number, pergunta: string, resposta: string }[]>('http://localhost:8080/deckName/Inglês')
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
}