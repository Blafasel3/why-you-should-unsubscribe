import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotUnsubscribingComponent } from './not-unsubscribing/not-unsubscribing.component';

@NgModule({
  declarations: [
    AppComponent,
    NotUnsubscribingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
