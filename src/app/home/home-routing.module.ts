import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChiTietPhimComponent } from './trangchitiet/chi-tiet-phim/chi-tiet-phim.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { AuthGuard } from '../_core/guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: TrangchuComponent},
    {path: 'trang-chi-tiet-phim/:Maphim', component: TrangchitietComponent,},
    {path: 'chi-tiet-phim', component: ChiTietPhimComponent,},
    {path: 'trang-dat-ghe', component: TrangdatgheComponent, canActivate: [AuthGuard]}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
