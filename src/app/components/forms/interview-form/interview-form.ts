import { Component } from '@angular/core';
import { InputField } from '../../ui/form/input-field/input-field';

@Component({
  selector: 'app-interview-form',
  imports: [InputField],
  templateUrl: './interview-form.html',
  styleUrl: './interview-form.css',
})
export class InterviewForm {}
