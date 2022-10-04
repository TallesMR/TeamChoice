import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    FooterLogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
