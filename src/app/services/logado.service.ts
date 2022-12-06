import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ls, miles } from 'src/environments/environment';
import { Validacampos } from '../classes/validacampos';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogadoService {

  public is_logado:Subject<boolean> = new Subject<boolean>();

  constructor(
    public http: HttpClient,
    public validaCampos: Validacampos,
    public router:Router
  ) { }

  enviar(nome: string,email: string,senha: string,idade:string,sexo: string,cep: string, posicao: string){
    return this.http.get(miles.api, { params:{
      controller: "cadastro", 
      op: "salvar",
      nome:   nome,
      email:  email,
      senha:  senha,
      idade:  idade,
      sexo:   sexo,
      cep:    cep,
      posicao:posicao 
    },
    }).subscribe(
      (res: any) => {
        if (res.status = 1) {
          this.setaLogin(res);  
        }else{
          this.validaCampos.msg       = res.msg;
          this.validaCampos.severity  = res.status;
        }
      });
  }

  testaLogado(){
    let usuario = ls.get("is_logado") == 'true' ? true : false;
    if (usuario) {
      this.is_logado.next(true);
      this.router.navigate(['/','dashboard']);
    }else{
      this.is_logado.next(false);
    }
  }

  setaLogin(response: any){
     ls.set('is_logado','true');
     ls.set('id',response.id);
     ls.set('username',response.username);
     this.testaLogado();
  }

  userExists(login:string, senha:string){
    return this.http.get(miles.api, { params:{
      controller: 'login',
      op        : 'logar',
      login     : login,
      senha     : senha
    }
  }).subscribe((res: any) => {
      if (res.status == '1') {
        this.setaLogin(res);
      }
  });
  }

  desloga(){
    this.is_logado.next(false);
    ls.clear();
    ls.set('is_logado','false');
  }

}
