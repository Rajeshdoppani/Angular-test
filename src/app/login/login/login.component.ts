import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsComponent } from '../../products/products/products.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(user) {
    localStorage.setItem('userDetails', user.email);
    this.router.navigate(['/products'],{ queryParams: { sortType: 'hightolow' } }).then(() => {
      window.location.reload();
    });
  }

}
