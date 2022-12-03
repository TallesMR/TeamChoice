import { Component, OnInit } from '@angular/core';
import { Validacampos } from '../classes/validacampos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public nome  = "";
  public senha1 = "";
  public senha2 = "";
  public email = "";
  public termo = false;

  constructor(
    public Validacampos:Validacampos
  ) { }

  ngOnInit(): void {
  }

  // Chama o service de validacao de campos
  acessar(){
  var campos = new Array<string>;  
  campos[0] = 'cad_nome';
  campos[1] = 'cad_senha';
  campos[2] = 'cad_email';
  campos[3] = 'cad_senha2';
  this.Validacampos.testaVazio(campos);
  }
  

}


// function $(selector:string):any{
//   return document.querySelector(selector);

// }