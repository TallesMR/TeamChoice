import { Component, OnInit } from '@angular/core';
import { Validacampos } from '../classes/validacampos';
import { LogadoService } from '../services/logado.service';
import { MessageService } from 'primeng/api';
import { TestaCarreiraService } from '../services/testa-carreira.service';
import { ls } from 'src/environments/environment';
import { SelecionarCarreiraComponent } from '../selecionar-carreira/selecionar-carreira.component';

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
  public idade    = '';
  public sexo     = '';
  public cep      = '';
  public posicao  = '';
  public carreira_user = '';
  public is_selecionoucarreira = false;

  constructor(
    public Validacampos:Validacampos,
    private messageService: MessageService,
    public logadoService:LogadoService,
    public carreira: TestaCarreiraService,

  ) { }

  ngOnInit(): void {
    this.preparaInput();
    this.testaSelecao();
  }

  preparaInput(){
    this.carreira.verificaCarreira.subscribe((is_player:boolean)=>{
       is_player ? this.is_jogador = true : this.is_jogador = false; 
    });
  }

  // Chama o service de validacao de campos
  testaCampos(){
    this.testaSelecao(); 
    console.log('carreira blabla' + this.is_selecionoucarreira);
    if (!this.is_selecionoucarreira) {
    this.messageService.add({severity:'error',  detail: 'Selecione uma carreira para prosseguir no cadastro'});
    }else{
    this.Validacampos.testaVazio(['#cad_nome','#cad_senha','#cad_senhaconfirmacao','#cad_email','#cad_idade','#cad_endereco','#cad_sexo','#cad_posicao']);
    this.chamaMenssage();
      }
    } 

    testaSelecao(){
      this.carreira.is_carreira.subscribe(
        (testaCarreira:boolean)=>{
          console.log('kakdsaasd' + testaCarreira);
          this.is_selecionoucarreira = testaCarreira;
        });
    }

  chamaMenssage(){
    if (!this.Validacampos.is_valid){
      this.messageService.add({severity:this.Validacampos.severity,  detail: this.Validacampos.msg});
    }
    this.enviaDados();
  }

  enviaDados(){
    if (this.Validacampos.is_valid) {
      this.carreira_user = ls.get('tipo_user')
      this.logadoService.enviar(this.nome,this.email,this.senha,this.idade,this.sexo,this.cep,this.posicao,this.carreira_user);
    }
  }

} 