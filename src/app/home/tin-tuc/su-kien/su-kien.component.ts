import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-su-kien',
  templateUrl: './su-kien.component.html',
  styleUrls: ['./su-kien.component.scss']
})
export class SuKienComponent implements OnInit {
  DanhSachSuKien = [
    {
      MaPhim: 19,
      TenPhim: 'Ted 2',
      Trailer: 'https://www.youtube.com/watch?v=S3AVcCggRnU',
      MoTa: 'Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he\'s a person in a court of law.',
      MaNhom: 'GP09',
      NgayKhoiChieu: '2018-07-29T00:00:00',
      DanhGia: 5,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/ted2.jpg'
  },
  {
      MaPhim: 29,
      TenPhim: 'Trainwreck',
      Trailer: 'https://www.youtube.com/watch?v=2MxnhBPoIx4',
      MoTa: 'Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.',
      MaNhom: 'GP09',
      NgayKhoiChieu: '2018-07-29T00:00:00',
      DanhGia: 5,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/trainwreck.jpg'
  },
  {
      MaPhim: 39,
      TenPhim: 'Inside Out',
      Trailer: 'https://www.youtube.com/watch?v=seMwpP0yeu4',
      MoTa: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
      MaNhom: 'GP09',
      NgayKhoiChieu: '2018-07-29T00:00:00',
      DanhGia: 5,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/insideout.jpg'
  },
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
