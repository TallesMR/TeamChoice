import { Component, OnInit } from '@angular/core';
import { LogadoService } from '../services/logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = "";
  public senha = "";

  constructor(
    public LogadoService: LogadoService
  ) { }

  ngOnInit(): void {
  }

  testaLogin(){
    this.LogadoService.userExists(this.login,this.senha);
  }


}
