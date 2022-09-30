import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavegacaoComponent } from './header/navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavegacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
