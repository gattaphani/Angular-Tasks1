import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Product, Rating } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  productDetails!: FormGroup;
  product: Product[] = [];
  selected1 = null;
  selected2 = null;

  constructor(private fb: FormBuilder, private router: Router) {
  }
  categories: Category[] = [
    { id: 1, name: 'Mobiles' },
    { id: 2, name: 'Televisions' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Tablets' },
    { id: 5, name: 'Smartwatches' },
  ];
  ratings: Rating[] = [
    { id: 1, name: '1*' },
    { id: 2, name: '2**' },
    { id: 3, name: '3***' },
    { id: 4, name: '4****' },
    { id: 5, name: '5*****' },
  ];
  ngOnInit() {
    this.productDetails = this.fb.group({
      slno: ['', [Validators.required, Validators.minLength(1)]],
      category: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      rating: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get formControls() {
    return this.productDetails.controls;
  }

  Submit(productDetails: any) {
    console.log(productDetails.value);
    if (this.productDetails?.valid) {
      this.product.push(this.productDetails.value);
    localStorage.setItem('product',  JSON.stringify(this.product))
    }
    this.router.navigate(['/product-list']);
    this.productDetails?.reset();
    
  }
}
