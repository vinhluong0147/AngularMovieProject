import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit{
  @Input() Phim;
  constructor() { }

  ngOnInit() {

  }


}
