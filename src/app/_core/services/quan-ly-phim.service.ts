import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {
  public phim;
  constructor(private http: HttpClient) { }

  public LayDanhSachPhim(): Observable<any> {
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP03`);
    return obs;
  }

  public LayChiTietPhim(maPhim: number): Observable<any> {
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laychitietphim?maphim=${maPhim}`);
    return obs;
  }

  public LayChiTietPhongVe(maLichChieu: string): Observable<any>{
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`);
    return obs;
  }
  public DatVe(ve: any): Observable<any>{
    const obs = `http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    return this.http.post(obs, ve, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }

  public ThongTinPhim(){
    return this.phim;
  }
}
