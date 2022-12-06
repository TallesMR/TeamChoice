import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestaCarreiraService } from '../services/testa-carreira.service';

@Component({
  selector: 'app-selecionar-carreira',
  templateUrl: './selecionar-carreira.component.html',
  styleUrls: ['./selecionar-carreira.component.css']
})
export class SelecionarCarreiraComponent implements OnInit {

  public is_jogador = false;

  constructor(
    public router: Router,
    public testaCarreira: TestaCarreiraService
  ) { }

  ngOnInit(): void {
  }

  selecionarCarreira(carreira_selecionada: string) {  
    this.testaCarreira.emiteSelecao(true,carreira_selecionada);
    if (carreira_selecionada == 'jogador') {
      $("#" + carreira_selecionada).css("opacity", "40%");
      $("#treinador").css("opacity", "100%");
    }else{
      $("#" + carreira_selecionada).css("opacity", "40%");
      $("#jogador").css("opacity", "100%");
    };
  }
}
