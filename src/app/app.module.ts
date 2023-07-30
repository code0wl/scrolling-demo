import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { ScrollDemoComponent } from './scroll-demo/scroll-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDemoComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
