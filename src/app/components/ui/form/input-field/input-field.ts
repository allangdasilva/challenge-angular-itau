import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
})
export class InputField {
  id = input.required<string>();
  name = input.required<string>();
  type = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
  autocomplete = input<string>();
}
