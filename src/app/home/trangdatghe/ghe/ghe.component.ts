import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit{
  @Input() DanhSachGhe;
  @Input() LichChieuParam;
  @Input() NgayGioChieu;
  @Input() Phim;
  DanhSachGheDangDat= [];
  DanhSachGheHienThi = []
  constructor(private phimService: QuanLyPhimService) { }

  ngOnInit() {
    for(let index in this.Phim.LichChieu){
      if(this.Phim.LichChieu[index].MaLichChieu == this.LichChieuParam){
        this.Phim.LichChieu = this.Phim.LichChieu[index];
      }
    }
  }
   
  
  handleDatGhe(status,ghe){
    let DanhSachVe:{MaGhe:string,GiaVe:number} = {
      MaGhe: ghe.MaGhe,
      GiaVe: ghe.GiaVe
    }
    if(status){
      this.DanhSachGheDangDat.push(DanhSachVe);
      this.DanhSachGheHienThi.push(ghe.TenGhe)
      // for(let index in this.Phim.LichChieu){
      //   if(this.Phim.LichChieu[index].MaLichChieu == this.LichChieuParam){
      //     this.Phim.LichChieu = this.Phim.LichChieu[index];
      //     console.log(this.Phim.LichChieu[index].MaLichChieu)
      //   }
      // }

    }
    else{
      for (let index in this.DanhSachGheDangDat){
        if(this.DanhSachGheDangDat[index].MaGhe === ghe.MaGhe){
          this.DanhSachGheDangDat.splice(parseInt(index),1);
          this.DanhSachGheHienThi.splice(parseInt(index),1);
        }
      }
      
    }

    
  }

  TinhTongTien(){
    let tongTien = 0;
    for (let ghe of this.DanhSachGheDangDat) {
      tongTien += ghe.GiaVe;
    }
    return tongTien;
    
  }


  DatVe(){
    let ve ={
      MaLichChieu: this.LichChieuParam,
      TaiKhoanNguoiDung: localStorage.getItem('user'),
      DanhSachVe: this.DanhSachGheDangDat
    }
    this.phimService.DatVe(ve).subscribe((res) => {

      Swal.fire({text: "Đặt vé thành công", type: 
      "success"}).then(function(){ 
        window.location.reload()
        })
    },(err) => {
      console.log(err)
    })
  }
}
