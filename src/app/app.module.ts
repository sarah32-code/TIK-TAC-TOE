import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarComponent } from './squar/squar.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [AppComponent, SquarComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
