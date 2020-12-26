import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path: '', component:FeedbackComponent}
]

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedbackModule { }
