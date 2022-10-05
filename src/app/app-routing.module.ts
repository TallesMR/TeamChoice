import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoticiaComponent } from './noticia/noticia.component';

const routes: Routes = [
  { path: ''            , component:HomeComponent},
  { path: 'home'        , component:HomeComponent},
  { path: 'cadastro'    , component:CadastroComponent},
  { path: 'login'       , component:LoginComponent},

  { path:'dashboard'    , component:DashboardComponent , children:[ 
    { path: ''              , component:NoticiaComponent}
  ]},
]


  @NgModule({
    declarations: [],
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  })
export class AppRoutingModule { }
