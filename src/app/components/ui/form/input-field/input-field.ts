import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
})
export class InputField {
  id = input.required<string>();
  name = input.required<string>();
  type = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
  control = input.required<FormControl>();
  autocomplete = input<string>();
}
