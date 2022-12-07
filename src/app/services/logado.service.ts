import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ls, miles } from 'src/environments/environment';
import { Validacampos } from '../classes/validacampos';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LogadoService {

  public carreira_user = ''

  public is_logado:Subject<boolean> = new Subject<boolean>();

  constructor(
    public http: HttpClient,
    public validaCampos: Validacampos,
    public router:Router,
    public messageService: MessageService
  ) { }



  enviar(nome: string,email: string,senha: string,idade:string,sexo: string,cep: string, posicao: string, carreira: string){
    return this.http.get(miles.api, { params:{
      controller: "cadastro", 
      op: "salvar",
      nome:   nome,
      email:  email,
      senha:  senha,
      idade:  idade,
      sexo:   sexo,
      cep:    cep,
      carreira: carreira,
      posicao:posicao
    },  
    }).subscribe(
      (res: any) => {
        if (res.status == '1') {
          this.setaLogin(res);
        }else{
          this.messageService.add({severity:'error',  detail: 'E-mail já cadastrado no sistema'});
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
