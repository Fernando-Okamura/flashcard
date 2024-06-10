import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

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
  decks: string[] = [];
  flashcards: { id: number; pergunta: string; resposta: string; }[] = [];

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadDecks();
  }

  loadDecks() {
    this.http.get<any[]>('http://localhost:8080/decks')
      .subscribe((decks: any[]) => {
        this.decks = decks;
      });
  }

  goToDeck(deckName: string) {
    this.http.get<{ id: number, pergunta: string, resposta: string }[]>('http://localhost:8080/deckName/'+ deckName)
      .subscribe(
          (data) => {
          this.flashcards = data;
          this.router.navigate(['/deck', { deckName: deckName, flashcards: data }]);
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