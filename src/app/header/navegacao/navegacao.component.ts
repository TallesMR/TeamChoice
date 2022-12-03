import { Component, OnInit } from '@angular/core';
import { LogadoService } from 'src/app/services/logado.service';
import { ls } from 'src/environments/environment';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  public nome = "";
  public is_logado:boolean = false;

  constructor(
    public logadoService: LogadoService
  ) { }

  ngOnInit(): void {
    this.nome       = ls.get('username');
    console.log(JSON.parse(ls.get('is_logado')));
    this.is_logado  = JSON.parse(ls.get('is_logado')); 
    console.log(this.is_logado);
  }

  // Chama serviço para deslogar user
  sair(){
    this.logadoService.desloga();
  }

}
