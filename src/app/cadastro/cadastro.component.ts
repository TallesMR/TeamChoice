import { Component, OnInit } from '@angular/core';
import { Validacampos } from '../classes/validacampos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public nome  = "";
  public senha = "";
  public email = "";
  public termo = false;

  constructor(
    public Validacampos:Validacampos
  ) { }

  ngOnInit(): void {
  }

  // Chama o service de validacao de campos
  validaCampos(){
    console.log(this.nome);
    this.Validacampos.validacampos([this.nome,this.senha,this.email]);
    let nomeCampo = this.Validacampos.nomecampo;
    let id:any = $('#' + this.Validacampos.nomecampo);
    id.style.border = '1px solid red';
    console.log("=>" + nomeCampo);
  }

}


function $(selector:string):any{
  return document.querySelector(selector);

}