import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.scss']
})
export class KhuyenMaiComponent implements OnInit {
  DanhSachKhuyenMai = [
    {
      MaPhim: 49,
      TenPhim: 'Home',
      Trailer: 'https://www.youtube.com/watch?v=MyqZf8LiWvM',
      MoTa: 'Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.',
      MaNhom: 'GP09',
      NgayKhoiChieu: '2018-07-29T00:00:00',
      DanhGia: 5,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/home.jpg'
  },
  {
      MaPhim: 59,
      TenPhim: 'Batman v Superman: Dawn of Justice',
      Trailer: 'https://www.youtube.com/watch?v=0WWzgGyAH6Y',
      MoTa: 'Fearing the actions of a god-like Super Hero left unchecked, Gotham City\'s own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it\'s ever known before.',
      MaNhom: 'GP09',
      NgayKhoiChieu: '2018-07-29T00:00:00',
      DanhGia: 5,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/batmanvssuperman.jpg'
  },
  {
      MaPhim: 69,
      TenPhim: 'Ant-Man',
      Trailer: 'https://www.youtube.com/watch?v=1HpZevFifuo',
      MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
      MaNhom: 'GP09',
      NgayKhoiChieu: '2018-07-29T00:00:00',
      DanhGia: 5,
      HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/antman.jpg'
  },
  ]
  constructor() { }

  ngOnInit() {
  }

}
