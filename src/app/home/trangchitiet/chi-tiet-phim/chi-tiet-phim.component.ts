import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service';
import { TrangchitietComponent } from '../trangchitiet.component';
import { SafePipe } from '../../../_core/pipe/safe.pipe';
import { AuthService } from '../../../_core/services/auth.service';
import Swal from 'sweetalert2'
import { TransferDataService } from '../../../_core/services/transfer-data.service';
@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  @Input() Phim;
  constructor(private authService: AuthService, private transferData: TransferDataService) {}

  ngOnInit() {
    
  }

  ValidateLogIn(){
    if(!this.authService.isLoggedIn){
      Swal.fire({
        type: 'error',
        text: 'Vui lòng đăng nhập trước khi đặt vé',
      })
    }else{
      this.transferData.tranferData(this.Phim)
    }
  }


}
