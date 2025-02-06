import { LOCALE_ID, NgModule, ɵDEFAULT_LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

//configuraciond de locale

import localEsEC from '@angular/common/locales/es-EC';
import localFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsEC);
registerLocaleData(localFrCA);






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
