import { Component, OnInit } from '@angular/core';
import { Validacampos } from '../classes/validacampos';
import { LogadoService } from '../services/logado.service';
import { MessageService } from 'primeng/api';
import { TestaCarreiraService } from '../services/testa-carreira.service';

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
  public is_jogador = false;
  public idade    = 0;
  public sexo     = '';
  public cep      = 0;
  public posicao  = '';

  constructor(
    public Validacampos:Validacampos,
    private messageService: MessageService,
    public logadoService:LogadoService,
    public carreira: TestaCarreiraService
  ) { }

  ngOnInit(): void {
  }

  // Chama o service de validacao de campos
  testaCampos(){
    this.carreira.is_carreira.subscribe(
    (testaCarreira:boolean)=>{
      console.log('=>' + testaCarreira);
      if (testaCarreira != true) {
        this.messageService.add({severity:'error',  detail: 'Selecione uma carreira para prosseguir no cadastro'});    
      }
    });
    this.Validacampos.testaVazio(['#cad_nome','#cad_senha','#cad_senhaconfirmacao','#cad_email','#cad_idade','#cad_endereco','#cad_sexo','#cad_posicao']);
    this.messageService.add({severity:this.Validacampos.severity,  detail: this.Validacampos.msg});
    if (this.Validacampos.is_valid) {
      this.logadoService.enviar(this.nome,this.email,this.senha,this.idade,this.sexo,this.cep,this.posicao);
    } 
  }

} 