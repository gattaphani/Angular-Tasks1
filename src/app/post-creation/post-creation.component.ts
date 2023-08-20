import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css']
})
export class PostCreationComponent implements OnInit {
  myForm!: FormGroup;
  showUpdate:boolean=false;

  constructor(private formBuilder: FormBuilder, private router: Router, private ps: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', [Validators.required]],
      body: ['', Validators.required]
    });

    this.route.params.subscribe((p: any) => {
      let postId = Number(p.id)
      if(postId >= 0){
        this.showUpdate=true
        this.getByPostId(postId)
      }
      else{
        this.showUpdate=false
      }
      
    })
  }

  getByPostId(id: number) {
    this.ps.getById(id).subscribe((res: any) => {
      this.myForm.patchValue({
        id: res.id,
        userId: res.userId,
        title: res.title,
        body: res.body
      })
      let data = res;
      console.log(data)
    })
  }

  // Define getter properties for easy access to form controls
  // get firstName() { return this.myForm.get('firstName'); }
  // get lastName() { return this.myForm.get('lastName'); }
  // get email() { return this.myForm.get('email'); }
  // get password() { return this.myForm.get('password'); }


  onSubmit(v:any) { 
    console.log(this.myForm.value);
    this.ps.create(v).subscribe((f:any)=>{
      console.log(f);
    })
    this.router.navigate(['posts'])
  }

  updatePost(p:any) {
    console.log(p);
    this.ps.update(p.id,p).subscribe((u:any)=>{
      console.log(u);
    })
    this.router.navigate(['posts'])
  }

}
