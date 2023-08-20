import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Category, Product, Rating } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private ps: ProductService) { }
  product: Product[] = [];
  productDetails!: FormGroup;
  selected1 = null;
  selected2 = null;
  details: any;
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
      slno: ['', [Validators.required]],
      category: ['', [Validators.required]],
      name: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.ps.subscribe$.subscribe((s: any) => {
      this.details = s
      console.log(this.details)
      this.mapProduct(this.details)
    })
  }
  mapProduct(f: any) {
    this.productDetails.patchValue({
      slno: f.slno,
      category: f.category,
      name: f.name,
      rating: f.rating,
      description: f.description
    });
    console.log(f)
  }

  upadteProduct(update: any) {
    console.log(update.value)
    this.router.navigate(['/product-list']);
  }
}
