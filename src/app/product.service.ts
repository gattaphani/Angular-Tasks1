import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  observer = new Subject();
  public subscribe$ = this.observer.asObservable();
  passData(data:any){
    this.observer.next(data)
  }
}
