import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from '../../_core/services/quan-ly-phim.service';
import { Subscription } from 'rxjs';
import { TransferDataService } from '../../_core/services/transfer-data.service';

@Component({
  selector: 'app-trangdatghe',
  templateUrl: './trangdatghe.component.html',
  styleUrls: ['./trangdatghe.component.scss']
})
export class TrangdatgheComponent implements OnInit,OnDestroy {
  public Phim;
  public MaPhim;
  public LichChieuParam: string;
  public DanhSachGhe = []
  public NgayGioChieu;
  private subParam: Subscription;
  private subService: Subscription;
  private subPhimService: Subscription;
  constructor(
      private activatedRoute: ActivatedRoute,
      private phimService : QuanLyPhimService,
      ) { }

  ngOnInit() {
    this.subParam = this.activatedRoute.queryParams.subscribe((param) => {
        this.LichChieuParam = param.Id;
        this.MaPhim = param.MovieId;
        this.LayChiTietPhongVe();
        this.LayChiTietPhim()
    },
    (error) => {
    })

    for(let index in this.Phim.LichChieu){
      if(this.Phim.LichChieu[index].MaLichChieu == this.LichChieuParam){
        this.Phim.LichChieu = this.Phim.LichChieu[index];
      }
    }
  }

  LayChiTietPhim(){
    this.subPhimService = this.phimService.LayChiTietPhim(this.MaPhim).subscribe(
      (res) => {
        this.Phim = res
        console.log(this.Phim)
      }
    )
  }
  
  LayChiTietPhongVe(){
    this.subService = this.phimService.LayChiTietPhongVe(this.LichChieuParam).subscribe((res) => {
      this.DanhSachGhe = res.DanhSachGhe;
    })
  }

  ngOnDestroy(){
    this.subParam.unsubscribe();
    this.subService.unsubscribe();
    this.subPhimService.unsubscribe()
  }

}
