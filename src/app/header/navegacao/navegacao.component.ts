import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogadoService } from 'src/app/services/logado.service';
import { ls } from 'src/environments/environment';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  public nome = ls.get('username');
  public is_login:boolean = false;

  constructor(
    public logadoService: LogadoService,
    public router: Router
  ) { 
    this.logadoService.is_logado
    .subscribe(
      (_isheader:boolean) => {
        this.is_login = _isheader;
       }
    );
  }

  ngOnInit(): void {

  }

  // Chama serviço para deslogar user
  sair(){
    this.logadoService.desloga();
    this.router.navigate(["/",'home']);
  }

}
