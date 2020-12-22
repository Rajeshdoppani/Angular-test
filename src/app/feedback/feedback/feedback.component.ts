import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitFeedback(feedback) {
    console.log(feedback);
    localStorage.setItem('userFeedback', JSON.stringify(feedback));
  }

  navigate() {
    this.router.navigate(['/products'], { queryParams: { sortType: 'hightolow' } }).then(() => {
      window.location.reload();
    });
  }

  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['login']);
  }


}
