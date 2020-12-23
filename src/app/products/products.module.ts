import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


import { ProductsComponent } from './products/products.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  {path: '', component: ProductsComponent}
]

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
