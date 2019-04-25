import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { HeaderComponent } from './header/header.component';
import { PhimComponent } from './phim/phim.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent, TrangchuComponent, TrangdatgheComponent, TrangchitietComponent, HeaderComponent, PhimComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
