import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';

@NgModule({
  declarations: [AdminComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
