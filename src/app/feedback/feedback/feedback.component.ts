import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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


  @ViewChild('feedbackForm') myForm;

  constructor(private router: Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  submitFeedback(feedback) {
    if (this.myForm.valid) {
      localStorage.setItem('userFeedback', JSON.stringify(feedback));
      this.snackbar.open('Submitted Successfully..!!','',{
        duration: 2000,
      });
      this.myForm.reset();
    }

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
