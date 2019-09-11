import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
