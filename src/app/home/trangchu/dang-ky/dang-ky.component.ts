import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  dangKy(nguoiDung: any) {
    nguoiDung.MaNhom = 'GP01';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    nguoiDung.TenLoaiNguoiDung = 'Khách hàng';
    if(nguoiDung.MatKhau === nguoiDung.MatKhauXacNhan ){
      this.userService.dangKyUser(nguoiDung)
      .subscribe(
        (res) => {
          Swal.fire(
            'Đăng ký thành công',
            'Ok',
            'success'
          )
          
        },
        (err) => {
        }
      );
    }
    }

}
