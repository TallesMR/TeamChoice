import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { miles } from 'src/environments/environment';
import { Validacampos } from '../classes/validacampos';

@Injectable({
  providedIn: 'root'
})
export class LogadoService {

  constructor(
    public http: HttpClient,
    public validaCampos: Validacampos
  ) { }

  enviar(nome: string,email: string,senha: string){
    console.log('=>' + miles.api);
    return this.http.get(miles.api, { params:{
      controller: "cadastro", 
      op: "salvar",
      nome: nome,
      email: email,
      senha: senha,
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
     localStorage.setItem('is_logado','true');
     localStorage.setItem('id',response.id);
     localStorage.setItem('username',response.username);
  }

}
