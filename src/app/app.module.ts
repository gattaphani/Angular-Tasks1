import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    FilterPipe,
    ProductDetailsComponent,
    ProductCreationComponent,
    ProductListComponent,
    PostsComponent,
    PostCreationComponent
  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
