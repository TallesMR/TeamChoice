import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecionar-carreira',
  templateUrl: './selecionar-carreira.component.html',
  styleUrls: ['./selecionar-carreira.component.css']
})
export class SelecionarCarreiraComponent implements OnInit {

  constructor() { }

  Passou() {
    console.log("passou");
  }

  ngOnInit(): void {

  }


}
