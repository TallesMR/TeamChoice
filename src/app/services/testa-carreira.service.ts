import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestaCarreiraService {

  public is_carreira:Subject<boolean> = new Subject<boolean>();

  constructor() { }

  emiteSelecao(is_selecionou:boolean,carreira_selecionada:string){
    console.log('=>' + carreira_selecionada)
    if (carreira_selecionada) {
      this.is_carreira.next(is_selecionou);
    }else{
      this.is_carreira.next(false);
    }
  }

}
