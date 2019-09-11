import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  
  private data = new BehaviorSubject(null);
  public asData = this.data.asObservable()
  constructor() { }

  public tranferData(param) {
    this.data.next(param)
  }
}
