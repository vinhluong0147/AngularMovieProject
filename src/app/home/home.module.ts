import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from './trangchu/footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';

import { TinTucComponent } from './tin-tuc/tin-tuc.component';

import { DangNhapComponent } from './trangchu/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './trangchu/dang-ky/dang-ky.component';
import { HeaderComponent } from './trangchu/header/header.component';
import { PhimComponent } from './loai-phim/phim/phim.component';
import { CarouselComponent } from './trangchu/carousel/carousel.component';
import { PhimSapChieuComponent } from './loai-phim/phim-sap-chieu/phim-sap-chieu.component';
import { PhimDangChieuComponent } from './loai-phim/phim-dang-chieu/phim-dang-chieu.component';
import { SuKienComponent } from './tin-tuc/su-kien/su-kien.component';
import { KhuyenMaiComponent } from './tin-tuc/khuyen-mai/khuyen-mai.component';
import { TinTucItemComponent } from './tin-tuc/tin-tuc-item/tin-tuc-item.component';
import { ReviewComponent } from './tin-tuc/review/review.component';
import { ChiTietPhimComponent } from './trangchitiet/chi-tiet-phim/chi-tiet-phim.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SafePipe } from '../_core/pipe/safe.pipe';
import { DanhSachGheComponent } from './trangdatghe/danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './trangdatghe/ghe/ghe.component';
import { GheItemComponent } from './trangdatghe/ghe-item/ghe-item.component';
import { AuthGuard } from '../_core/guard/auth.guard';
import { AuthService } from '../_core/services/auth.service';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, FooterComponent, TrangchuComponent, TrangdatgheComponent, TrangchitietComponent, HeaderComponent, PhimComponent, CarouselComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, TinTucComponent, SuKienComponent, KhuyenMaiComponent, TinTucItemComponent, ReviewComponent, ChiTietPhimComponent, DangNhapComponent, DangKyComponent,SafePipe, DanhSachGheComponent, GheComponent, GheItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [AuthGuard, AuthService],
  exports: [
    HomeComponent, FooterComponent, TrangchuComponent, TrangdatgheComponent, TrangchitietComponent, HeaderComponent, PhimComponent, CarouselComponent
  ],
  
})
export class HomeModule { }
