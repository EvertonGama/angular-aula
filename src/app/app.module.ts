import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OutletContext } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PedidosComponent } from './telas/pedidos/pedidos.component';
import { ProdutosComponent } from './telas/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PedidosComponent,
    ProdutosComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
