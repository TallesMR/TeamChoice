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
  testaCampos(){
    let campos = new Array;
    campos[0] = '#cad_nome';
    campos[1] = '#cad_senha';
    campos[2] = '#cad_senhaconfirmacao';
    campos[3] = '#cad_email';
    this.Validacampos.testaVazio(campos);  
  }

}