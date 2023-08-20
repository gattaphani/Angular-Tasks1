import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  constructor(private fb: FormBuilder,private router: Router, private ps:ProductService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
