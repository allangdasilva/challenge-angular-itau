import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  imports: [],
  templateUrl: './button-submit.html',
  styleUrl: './button-submit.css',
})
export class ButtonSubmit {
  valid = input.required<boolean>();
  loading = input.required<boolean>();
}
