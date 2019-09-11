import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchitietComponent } from './home/trangchitiet/trangchitiet.component';
import { HomeComponent } from './home/home.component';
import { TrangchuComponent } from './home/trangchu/trangchu.component';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './_core/guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'home', loadChildren: () => HomeModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
