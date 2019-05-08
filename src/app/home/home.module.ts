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
import { CarouselComponent } from './carousel/carousel.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { SuKienComponent } from './su-kien/su-kien.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { TinTucItemComponent } from './tin-tuc-item/tin-tuc-item.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, FooterComponent, TrangchuComponent, TrangdatgheComponent, TrangchitietComponent, HeaderComponent, PhimComponent, CarouselComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, CumRapComponent, TinTucComponent, SuKienComponent, KhuyenMaiComponent, TinTucItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent, FooterComponent, TrangchuComponent, TrangdatgheComponent, TrangchitietComponent, HeaderComponent, PhimComponent, CarouselComponent
  ]
})
export class HomeModule { }
