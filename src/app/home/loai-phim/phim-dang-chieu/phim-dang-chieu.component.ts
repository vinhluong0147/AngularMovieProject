import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import $ from 'jquery';
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit, OnDestroy {
  DanhSachPhimDangChieu = [
    {
        MaPhim: 43,
        TenPhim: 'Home',
        Trailer: 'https://www.youtube.com/watch?v=MyqZf8LiWvM',
        MoTa: 'Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/home.jpg'
    },
    {
        MaPhim: 53,
        TenPhim: 'Batman v Superman: Dawn of Justice',
        Trailer: 'https://www.youtube.com/watch?v=0WWzgGyAH6Y',
        MoTa: 'Fearing the actions of a god-like Super Hero left unchecked, Gotham City\'s own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it\'s ever known before.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/batmanvssuperman.jpg'
    },
    {
        MaPhim: 63,
        TenPhim: 'Ant-Man',
        Trailer: 'https://www.youtube.com/watch?v=1HpZevFifuo',
        MoTa: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/antman.jpg'
    },
    {
        MaPhim: 73,
        TenPhim: 'Jurassic World',
        Trailer: 'https://www.youtube.com/watch?v=RFinNxS5KN4',
        MoTa: 'A new theme park is built on the original site of Jurassic Park. Everything is going well until the park\'s newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/jurassicworld.jpg'
    },
    {
        MaPhim: 83,
        TenPhim: 'Fantastic Four',
        Trailer: 'https://www.youtube.com/watch?v=AAgnQdiZFsQ',
        MoTa: 'Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/fantasticfour.jpg'
    },
    {
        MaPhim: 93,
        TenPhim: 'Mad Max: Fury Road',
        Trailer: 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
        MoTa: 'In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/madmax.jpg'
    },
    {
        MaPhim: 103,
        TenPhim: 'True Detective',
        Trailer: 'https://www.youtube.com/watch?v=TXwCoNwBSkQ',
        MoTa: 'An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/truedetective.jpg'
    },
    {
        MaPhim: 113,
        TenPhim: 'The Longest Ride',
        Trailer: 'https://www.youtube.com/watch?v=FUS_Q7FsfqU',
        MoTa: 'After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/thelongestride.jpg'
    },
    {
        MaPhim: 123,
        TenPhim: 'The Walking Dead',
        Trailer: 'https://www.youtube.com/watch?v=R1v0uFms68U',
        MoTa: 'Sheriff\'s Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/thewalkingdead.jpg'
    },
    {
        MaPhim: 133,
        TenPhim: 'BIG BROTHER (ĐẠI SƯ HUYNH)',
        Trailer: 'https://www.youtube.com/watch?v=FZDJZCgsaFc',
        MoTa: 'Một giáo viên trung học mỗi ngày đều đặn tới trường gõ đầu trẻ cho đến một hôm…cậu học sinh do anh chủ nhiệm dính vào rắc rối với một băng đảng xã hội đen và bị bắt cóc. Đó cũng là lúc bí mật của“anh” thầy trước giờ luôn hiền lành, hết mực yêu thương học sinh và có tâm với nghề bị bộc lộ. Có vẻ như quá khứ máu lửa không buông tha “anh” thầy mà buộc anh phải trở lại con người xưa nhưng có khác là lần này không phải chiến đấu cho bản thân anh, mà cho những đứa trẻ mà anh luôn xem chúng như những đứa em trai.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-08-30T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/big-brother-dai-su-huynh-.jpg'
    },
    {
        MaPhim: 143,
        TenPhim: 'Specter',
        Trailer: 'https://www.youtube.com/watch?v=LTDaET-JweU',
        MoTa: 'A cryptic message from Bond\'s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-07-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/spectre.jpg'
    },
    {
        MaPhim: 353,
        TenPhim: 'Venom',
        Trailer: 'https://www.youtube.com/watch?v=-C1JZ0adMs8',
        MoTa: 'Venom đã hé lộ thân phận nhân vật phản diện cực kỳ nguy hiểm và kinh hãi khi tung trailer chính thức khắp thế giới làm điên đảo fan hâm mộ trong thế giới của Marvel. Chàng phóng viên Eddie Brock bí mật theo dõi âm mưu xấu xa của một tổ chức và bị nhiễm phải Symbiote và trở thành quái vật Venom đầy nguy hiểm.\n',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-10-05T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/venom.jpg'
    },
    {
        MaPhim: 358,
        TenPhim: 'Johnny English: Tái Xuất Giang Hồ',
        Trailer: 'https://www.youtube.com/watch?v=goh-FbUbSA0',
        MoTa: 'JOHNNY ENGLISH: TÁI XUẤT GIANG HỒ là phần thứ ba của loạt phim hài Johnny English, với Rowan Atkinson trong vai một gã bỗng dưng trở thành một điệp viên bí mật. Cuộc phiêu lưu mới bắt đầu khi một vụ điều tra hệ thống an ninh mạng cho thấy danh tính của tất cả các điệp viên đang hoạt động tại Anh, và Johnny là hy vọng cuối cùng để điều tra bí mật ấy. Dù được biết là một điệp viên nghỉ hưu nhưng đây là lần đầu tiên gã giang hồ này bắt tay động với sứ mệnh tìm kiếm kẻ tấn công. Là một người với kỹ năng ít ỏi và năng lực hạn chế, Johnny English có phải vượt qua được những thách thức trong thời buổi công nghệ hiện đại để hoàn thành sứ mệnh này thành công hay không?',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-10-04T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/johnny-english-tai-xuat-giang-ho.jpg'
    },
    {
        MaPhim: 359,
        TenPhim: 'Hoán Đổi',
        Trailer: 'https://www.youtube.com/watch?v=Np5bf7wWN8s',
        MoTa: 'Câu chuyện tréo ngoe của bộ phim bắt đầu khi cô ca sĩ Tiên Tiên (Phương) vô tình bị cơn lốc xoáy hoán đổi linh hồn với một vị võ sư (Việt Hương). Từ đây, hàng loạt tình huống dở khóc dở cười xảy ra khi cả hai phải đối điện và học cách làm quen với cuộc sống hằng ngày của người khác.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-08-31T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/hoan-doi.jpg'
    },
    {
        MaPhim: 360,
        TenPhim: 'THE PREDATOR (Quái Thú Vô Hình)',
        Trailer: 'https://www.youtube.com/watch?v=cWBX5VO6U4k',
        MoTa: 'Những thợ săn bí ẩn từ không gian bỗng xuất hiện ở Trái Đất. Chính quyền cử một đội đặc nhiệm truy tìm và lùng bắt những thợ săn này nhưng liệu ai mới thật sự là kẻ đi săn. Bí ẩn về giống loài tiên tiến này dần được hé lộ.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-14T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/the-predator-quai-thu-vo-hinh-.jpg'
    },
   
];


  // PhimSubscriber: Subscription;

  constructor(private PhimService: QuanLyPhimService ) { }

  // tslint:disable-next-line:only-arrow-functions
  ngOnInit() {
    // this.PhimSubscriber = this.PhimService.LayDanhSachPhim().subscribe((mangPhim:any) => {
    //     this.DanhSachPhimDangChieu = mangPhim;
    //     console.log(this.DanhSachPhimDangChieu)
    // })

  }

  ngOnDestroy() {
    // this.PhimSubscriber.unsubscribe();
  }


  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive: {
          320: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            980: {
                items: 5,
                nav: true,
            }
        }
    });
  }
}
