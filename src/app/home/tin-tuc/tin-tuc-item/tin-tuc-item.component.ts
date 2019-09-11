import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tin-tuc-item',
  templateUrl: './tin-tuc-item.component.html',
  styleUrls: ['./tin-tuc-item.component.scss']
})
export class TinTucItemComponent implements OnInit {
  @Input() TinTuc;
  constructor() { }

  ngOnInit() {
  }

}
