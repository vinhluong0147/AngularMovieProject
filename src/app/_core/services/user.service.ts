import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dangKyUser(nguoiDung: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    return this.http.post(url, nguoiDung, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }
  
  dangNhapUser(taikhoan: any,matkhau: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    return this.http.post(url, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }

  constructor(private http: HttpClient) { }


}
