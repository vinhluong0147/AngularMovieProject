import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-item',
  templateUrl: './ghe-item.component.html',
  styleUrls: ['./ghe-item.component.scss']
})
export class GheItemComponent implements OnInit {
  @Input() itemGhe;
  @Output() emitStatus= new EventEmitter();
  status = false;
  constructor() { }

  ngOnInit() {
    
  }
  
  datGhe(){
    if(this.status){
      this.status = false;
    }
    else{
      this.status = true;
    }
    this.emitStatus.emit(this.status)
  }
}
