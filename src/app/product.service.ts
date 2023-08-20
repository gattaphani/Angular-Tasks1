import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  observer = new Subject();
  public subscribe$ = this.observer.asObservable();
  passData(data:any){
    this.observer.next(data)
  }

  url: any = 'https://jsonplaceholder.typicode.com/posts';
  get(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getById(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/' + id);
  }

  create(users: any): Observable<any[]> {
    return this.http.post<any[]>(this.url, users);
  }

  update(id: number, users: any): Observable<any[]> {
    return this.http.put<any[]>(this.url + '/' + id, users);
  }

  delete(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.url + '/' + id);
  }
}
