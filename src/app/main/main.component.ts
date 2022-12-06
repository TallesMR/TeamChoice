import { Component, OnInit } from '@angular/core'; 
import { LogadoService } from '../services/logado.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public logadoService: LogadoService
  ) { }

  ngOnInit(): void {
    this.testaUsuario();
  }

  testaUsuario(){
    this.logadoService.testaLogado();
  }

}
