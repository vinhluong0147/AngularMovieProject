import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
  Status = true;

  constructor() { }

  HienPhimDangChieu(){
    this.Status = true;
  }

  HienPhimSapChieu(){
    this.Status = false;
  }

  ngOnInit() {
  }
  
}
