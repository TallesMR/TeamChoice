import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { miles } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http: HttpClient
  ) { }

  get(_controller: string ,_params:any = {}){
    _params._controller = _controller;
  return this.http.get(miles.api,{params : _params} );
  }

}
