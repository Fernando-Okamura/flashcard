import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.page.html',
  styleUrls: ['./deck.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule]
})
export class DeckPage implements OnInit {



  deckName!: string;
  flashcards: { id: number, pergunta: string, resposta: string }[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.deckName = params.get('deckName')!;
      const flashcardsString = params.get('flashcards');
      if (flashcardsString) {
        this.flashcards = JSON.parse(flashcardsString);
      } else {
        this.flashcards = [];
      }
    });
    
  }
  isCardFlipped: { [key: string]: boolean } = { card1: false, card2: false };

  toggleCardRotation(cardId: string) {
    this.isCardFlipped[cardId] = !this.isCardFlipped[cardId];
  }
}