import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';    
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';       

// NG PRIME FACES

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CarouselModule } from 'primeng/carousel';

import { AppComponent } from './app.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NewsletterComponent } from './footer/newsletter/newsletter.component';
import { HeaderComponent } from './header/header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavegacaoComponent } from './header/navegacao/navegacao.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SearchComponent } from './search/search.component';
import { SelecionarCarreiraComponent } from './selecionar-carreira/selecionar-carreira.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FooterLogoComponent } from './footer/footer-logo/footer-logo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './dashboard/menu-lateral/menu-lateral.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { CriarTimeComponent } from './criar-time/criar-time.component';
import { PesquisaJogadorComponent } from './dashboard/pesquisa-jogador/pesquisa-jogador.component';
import { HistoricoComponent } from './dashboard/historico/historico.component';
import { EstatistaComponent } from './dashboard/estatista/estatista.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    NavegacaoComponent,
    CopyrightComponent,
    FooterComponent,
    NewsletterComponent,
    NoticiaComponent,
    SearchComponent,
    SliderComponent,
    SelecionarCarreiraComponent,
    MainComponent,
    HomeComponent,
    FooterLogoComponent,
    CadastroComponent,
    LoginComponent,
    MenuLateralComponent,
    DashboardComponent,
    DashboardHomeComponent,
    CriarTimeComponent,
    PesquisaJogadorComponent,
    HistoricoComponent,
    EstatistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ChartModule,
    CarouselModule,
    FontAwesomeModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
