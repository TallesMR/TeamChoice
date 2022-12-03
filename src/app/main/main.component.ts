import { Component, OnInit } from '@angular/core'; 
import { ls } from 'src/environments/environment';
import { LogadoService } from '../services/logado.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public is_logado:Subject<boolean> = new Subject<boolean>();

  constructor(
    public logadoService: LogadoService
  ) { }

  ngOnInit(): void {
    this.testaUsuario();
  }

  testaUsuario(){
    let usuario = ls.get("is_logado") == 'true' ? true : false;
    if (usuario) {
      
    }
  }

}
