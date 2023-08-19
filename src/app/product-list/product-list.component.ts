import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productDetails!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private ps:ProductService) {
  }

  product: Product[] = [
    {
      slno: 1,
      category:'Mobiles',
      name:'Redmi 12',
      rating: '5*****',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      slno: 2,
      category:'Televisions',
      name:'Redmi',
      rating: '5*****',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      slno: 3,
      category:'Laptops',
      name:'Redmi Notebook',
      rating: '5*****',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      slno: 4,
      category:'Smartwatches',
      name:'Samsung Galaxy',
      rating: '5*****',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    }
  ];

  parse:any=''
  ngOnInit() {
    this.parse = localStorage.getItem('product')
    let r = JSON.parse(this.parse)
    r.forEach((element:any) => {
      this.product.push(element)
    });
    console.log(this.product)
   
  }

 

  addProduct(){
    this.router.navigate(['/product-creation']);
  }
  
  edit(f: any) {
    this.ps.passData(f);
     this.router.navigate(['/product-details']);
  }
  delete(i:number) {
    this.product.splice(i, 1);
  }
}
