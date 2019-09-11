import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {
  selectedIndex = 1;
  
  constructor() { }

  ngOnInit() {
  }

  showDiv(index: number) {
    this.selectedIndex = index;
    console.log(this.selectedIndex)
  }
 
}
