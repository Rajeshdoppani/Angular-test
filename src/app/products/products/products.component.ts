import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import products from '../../shared/products.json';

import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: [] = products;

  types = [{ value: 'hightolow', viewValue: 'High To Low' }, { value: 'lowtohigh', viewValue: 'Low To High' }];

  sortType;
  images;
  notEmptyPost = true;
  notscrolly = true;
  some = 12;

  constructor(private router: Router, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(resp => {
      this.sortType = resp.sortType;
      if (this.sortType == 'hightolow') {
        this.sortByHightolow();
      }
      else if (this.sortType == 'lowtohigh') {
        this.sortByLowtohigh();
      }
    })
    this.productList.forEach((product: {}) => {
      this.images = product['Images'];
      product['Images'] = this.images.split("|");
    })
  }

  sortOrder(event) {
    if (event == 'lowtohigh') {
      this.sortByLowtohigh();
      this.router.navigate(
        [],
        {
          relativeTo: this.route,
          queryParams: { sortType: 'lowtohigh' },
          queryParamsHandling: 'merge',
        }).then(() => {
          window.location.reload();
        });
    }
    else if (event == 'hightolow') {
      this.sortByHightolow();
      this.router.navigate(
        [],
        {
          relativeTo: this.route,
          queryParams: { sortType: 'hightolow' },
          queryParamsHandling: 'merge',
        }).then(() => {
          window.location.reload();
        });
    }
  }

  sortByHightolow() {
    this.productList.sort((a, b) => b['Price'] - a['Price']);
  }

  sortByLowtohigh() {
    this.productList.sort((a, b) => a['Price'] - b['Price']);
  }

  onScroll() {
    this.loadNextPost();
  }

  loadNextPost() {
    this.some += 12;
  }

  navigate() {
    this.router.navigate(['feedback']);
  }

  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['login']);
  }

}
