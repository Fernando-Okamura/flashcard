
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crie',
  templateUrl: './crie.page.html',
  styleUrls: ['./crie.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule]
})
export class CriePage {
  pergunta: string = '';
  resposta: string = '';
  deckName: string = '';

  constructor(private http: HttpClient,
    private toastController: ToastController,
    private alertController: AlertController) { }

  async cadastrarFlashcard() {

    // Validação dos campos
    if (!this.pergunta.trim() || !this.resposta.trim() || !this.deckName.trim()) {
      console.error('Por favor, preencha todos os campos.');
      return;
    }

    // Cria um objeto com os dados do flashcard
    const flashcardData = {
      pergunta: this.pergunta,
      resposta: this.resposta,
      deckName: this.deckName
    };
    try {
      // Envia os dados para o backend
      const response = await this.http.post('http://localhost:8080/cadastrar', flashcardData, { responseType: 'text' }).toPromise();

      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: response,
        buttons: ['OK']
      });

      await alert.present();
      this.pergunta = '';
      this.resposta = '';
      this.deckName = '';
      
    } catch (error) {
      console.error('Erro ao cadastrar o flashcard:', error);
      // Trata o erro, exibe uma mensagem para o usuário, etc.
      // Limpa os campos após o cadastro
      this.pergunta = '';
      this.resposta = '';
      this.deckName = '';
    }
  }
}
