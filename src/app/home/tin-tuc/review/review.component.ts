import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  DanhSachReView = [
    {
      MaPhim: 1786,
      TenPhim: 'Quý Cô Lừa Đảo - The Hustle ',
      Trailer: 'https://www.youtube.com/embed/q2JzRKJEgwg',
      MoTa: 'Quý Cô Lừa Đảo',
      MaNhom: 'GP06',
      NgayKhoiChieu: '2019-10-05T00:00:00',
      DanhGia: 511,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/quy-co-lua-dao-the-hustle.jpg'
  },
  {
      MaPhim: 1787,
      TenPhim: 'Avengers: Hồi Kết - Avengers: Endgame ',
      Trailer: 'https://www.youtube.com/embed/4sZj4aeYUCA',
      MoTa: 'Avengers',
      MaNhom: 'GP06',
      NgayKhoiChieu: '2019-10-05T00:00:00',
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/avengers-hoi-ket-avengers-endgame.jpg'
  },
  {
      MaPhim: 1792,
      TenPhim: 'Vô Gian Đạo',
      Trailer: 'https://www.youtube.com/embed/TP0c55uyL_Y',
      MoTa: 'Bộ phim làm về đề tài cờ bạc bịp đầu tiên ở Việt Nam với sự tham gia của loạt gương mặt trẻ đầy tiềm năng: La Thành, Xuân Nghị, Huỳnh Anh... hứa hẹn sẽ đem đến cho khán giả màn trình diễn vô cùng hài hước, thú vị.',
      MaNhom: 'GP06',
      NgayKhoiChieu: '2019-03-29T00:00:00',
      DanhGia: 4,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/vo-gian-dao.jpg'
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
