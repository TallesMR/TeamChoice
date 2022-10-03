import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavegacaoComponent } from './header/navegacao/navegacao.component';
import { SelecionarCarreiraComponent } from './selecionar-carreira/selecionar-carreira.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavegacaoComponent,
    SelecionarCarreiraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
