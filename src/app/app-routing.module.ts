import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
  { path: ''        , component:HomeComponent},
  { path: 'home'    , component:HomeComponent}
]


  @NgModule({
    declarations: [],
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  })
export class AppRoutingModule { }
