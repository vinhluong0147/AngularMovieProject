import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from '../../_core/services/quan-ly-phim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.scss']
})
export class TrangchitietComponent implements OnInit {

  public Phim;
  public MaPhim;
  private subParam: Subscription;
  private subService: Subscription;
  constructor(
    private activateouter: ActivatedRoute,
    private phimService: QuanLyPhimService

    ) {}

  ngOnInit() {
    this.subParam = this.activateouter.params.subscribe((param) => {
      this.MaPhim = param.Maphim;
      this.LayChiTietPhim();
    });

  }

  LayChiTietPhim() {
    this.subService = this.phimService.LayChiTietPhim(this.MaPhim).subscribe((phim: any) => {
      this.Phim = phim;
      let trailer = this.Phim.Trailer;
      trailer = trailer.split('/watch?v=');
      this.Phim.Trailer = trailer[0] + '/embed/' + trailer[1];
    });
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
    this.subService.unsubscribe();
  }

}
