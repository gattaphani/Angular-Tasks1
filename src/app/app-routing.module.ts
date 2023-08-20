import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreationComponent } from './post-creation/post-creation.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-creation', component: ProductCreationComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'posts', component: PostsComponent },
 
  { path: 'post-creation/:id', component: PostCreationComponent },
  { path: 'post-creation', component: PostCreationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
