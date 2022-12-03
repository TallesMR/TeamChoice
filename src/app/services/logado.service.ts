import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ls, miles } from 'src/environments/environment';
import { Validacampos } from '../classes/validacampos';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogadoService {

  constructor(
    public http: HttpClient,
    public validaCampos: Validacampos,
    public router:Router
  ) { }

  enviar(nome: string,email: string,senha: string){
    return this.http.get(miles.api, { params:{
      controller: "cadastro", 
      op: "salvar",
      nome:   nome,
      email:  email,
      senha:  senha,
    },
    }).subscribe(
      (res: any) => {
        if (res.status = 'success') {
          this.setaLogin(res);  
        }else{
          this.validaCampos.msg       = res.msg;
          this.validaCampos.severity  = res.status;
        }
      });
  }

  setaLogin(response: any){
     ls.set('is_logado','true');
     ls.set('id',response.id);
     ls.set('username',response.username);
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
    ls.clear();
    ls.set('is_logado','false');
  }

}
