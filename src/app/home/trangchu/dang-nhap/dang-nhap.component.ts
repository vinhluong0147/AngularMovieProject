import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  constructor(private userService: UserService,) {}

  ngOnInit() {
  }


  dangNhap(nguoiDung: any) {
      this.userService.dangNhapUser(nguoiDung.TaiKhoan, nguoiDung.MatKhau)
      .subscribe(
        (res) => {
          if(res.TaiKhoan === nguoiDung.TaiKhoan && res.MatKhau === nguoiDung.MatKhau){
            localStorage.setItem('user',nguoiDung.TaiKhoan)
            window.location.reload()
            console.log(res)
          }else{
          Swal.fire({
            text: 'Tài khoản hoặc mật khẩu không chính sác vui lòng nhập lại',
          })
          }
        },
        (err) => {
         
        }
      );
    }



    
    
}



