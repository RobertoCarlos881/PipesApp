import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-MX';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
