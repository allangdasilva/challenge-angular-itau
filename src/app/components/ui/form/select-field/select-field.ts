import { LowerCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-select-field',
  imports: [LowerCasePipe],
  templateUrl: './select-field.html',
  styleUrl: './select-field.css',
})
export class SelectField {
  id = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
  values = input.required<string[]>();
}
