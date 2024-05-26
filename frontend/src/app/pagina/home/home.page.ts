import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    // Limpar qualquer estado indesejado da página anterior
    // Exemplo: redefinir variáveis ​​ou limpar listas
  }

  ionViewDidEnter() {
    // Realizar tarefas de inicialização após a página ser carregada completamente
    // Exemplo: buscar dados atualizados do servidor
  }


  ngOnInit() {
  }

}
