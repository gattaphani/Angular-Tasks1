import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  myForm!: FormGroup
  Posts: any[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private ps: ProductService) {
  }
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', [Validators.required]],
      body: ['', Validators.required]
    });
    this.ps.create(this.myForm.value).subscribe((c: any) => {
      console.log(c)
      this.Posts.push(c)
      console.log(this.Posts)
    })
    this.getAllPosts()
  }
  getAllPosts() {
    this.ps.get().subscribe(response => {
      this.Posts = response;
      console.log(this.Posts);
    });
  }

  createPost() {
    this.router.navigate(['post-creation'])
  }
  editPost(id: any) {
    console.log(id)
    this.ps.getById(id).subscribe((e: any) => {
      console.log(e)
      this.router.navigate(['post-creation', id])
    })
  }
  deletePost(i: any) {
    this.ps.delete(i).subscribe((d: any) => {
      console.log(this.Posts)
    })
    this.getAllPosts()
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPosts();
  }
}
