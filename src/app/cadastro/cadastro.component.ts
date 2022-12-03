import { Component, OnInit } from '@angular/core';
import { Validacampos } from '../classes/validacampos';
import { LogadoService } from '../services/logado.service';
import { MessageService } from 'primeng/api';
import { query } from '@angular/animations';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public nome  = "";
  public senha = "";
  public confirmasenha = "";
  public email = "";
  public termo = false;

  constructor(
    public Validacampos:Validacampos,
    private messageService: MessageService,
    public logadoService:LogadoService
  ) { }

  ngOnInit(): void {
  }

  // Chama o service de validacao de campos
  testaCampos(){
    this.Validacampos.testaVazio(['#cad_nome','#cad_senha','#cad_senhaconfirmacao','#cad_email']);
    this.messageService.add({severity:this.Validacampos.severity,  detail: this.Validacampos.msg});
    if (this.Validacampos.is_valid) {
      this.logadoService.enviar(this.nome,this.email,this.senha);
    } 
  }
  

  trocaInput(id: string){
    console.log('mudou display ' + id);
    let input = document.querySelector(id);
  }

}