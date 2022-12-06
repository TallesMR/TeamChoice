import { NgModule } from '@angular/core';
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
import { SelecionarCarreiraComponent } from './selecionar-carreira/selecionar-carreira.component';

const routes: Routes = [
  { path: ''            , component:HomeComponent},
  { path: 'home'        , component:HomeComponent},
  { path:'cadastro'         , component:CadastroComponent},
  { path: 'login'       , component:LoginComponent},
  { path: 'noticias'    , component:NoticiaComponent},

  { path:'dashboard'              , component:DashboardComponent , children:[ 
    { path: ''                    , component:DashboardHomeComponent},
    { path: 'home'                , component:DashboardHomeComponent},
    { path: 'criar-time'          , component:CriarTimeComponent},
    { path: 'estatistica'         , component:EstatistaComponent},
    { path: 'historico'           , component:HistoricoComponent},
    { path: 'pesquisa-jogador'    , component:PesquisaJogadorComponent}
  ]},
]


  @NgModule({
    declarations: [],
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  })
export class AppRoutingModule { 

}
