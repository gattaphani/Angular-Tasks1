import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  baseUrl = 'https://jsonplaceholder.typicode.com/users';
  showLess?:boolean;
  showMore?:boolean=true;

  constructor(private http: HttpClient) { }
  search: string = '';
  ngOnInit() {
    this.getAllUsers();
  }
  Users: any = [];

  getAllUsers() {
    return this.http.get(this.baseUrl).subscribe((val: any) => {
      this.Users = val;
      console.log(this.Users)
    })

  }
  getMoreUsers() {
    this.Users.push(
      {
        email: "Sincere@april.biz",
        id: 11,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret"
      },
      {
        email: "Sin@april.biz",
        id: 12,
        name: "Leanne",
        phone: "770-736-8031 x56442",
        username: "John"
      }
    )
    this.showLess=true;
    this.showMore=false;
  }
  trackById(index:number,user:any){
    return user.id;
  }
  showLessUsers(){
    this.showMore=true;
    this.showLess=false;
    this.getAllUsers()
  }
}



