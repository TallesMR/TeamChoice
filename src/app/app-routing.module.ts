import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { CriarTimeComponent } from './dashboard/criar-time/criar-time.component';
import { EstatistaComponent } from './dashboard/estatista/estatista.component';
import { HistoricoComponent } from './dashboard/historico/historico.component';
import { PesquisaJogadorComponent } from './dashboard/pesquisa-jogador/pesquisa-jogador.component';

const routes: Routes = [
  { path: ''            , component:HomeComponent},
  { path: 'home'        , component:HomeComponent},
  { path: 'cadastro'    , component:CadastroComponent},
  { path: 'login'       , component:LoginComponent},
  { path: 'noticias'    , NoticiaComponent}

  { path:'dashboard'              , component:DashboardComponent , children:[ 
    { path: ''                    , component:DashboardHomeComponent},
    { path: 'criar-time'          , CriarTimeComponent},
    { path: 'estatistica'         , EstatistaComponent},
    { path: 'historico'           , HistoricoComponent},
    { path: 'pesquisa-jogador'    , PesquisaJogadorComponent}

  ]},
]


  @NgModule({
    declarations: [],
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  })
export class AppRoutingModule { }
