import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ls } from 'src/environments/environment';
import { LogadoService } from './logado.service';

@Injectable({
  providedIn: 'root'
})
export class TestaCarreiraService {

  public is_carreira:Subject<boolean> = new Subject<boolean>();
  public verificaCarreira:Subject<boolean> = new Subject<boolean>();

  constructor(
    public logadoService: LogadoService
  ) { }

  emiteSelecao(is_selecionou:boolean,carreira_selecionada:string){
    console.log('esse aromabdo ' + is_selecionou)
    if (is_selecionou) {
      this.is_carreira.next(true);
      ls.set('tipo_user',carreira_selecionada);
      carreira_selecionada == 'jogador' ? this.verificaCarreira.next(true) : this.verificaCarreira.next(false);
    }else{
      this.is_carreira.next(false);
    }
  }

}
