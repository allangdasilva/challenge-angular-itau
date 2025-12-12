import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-field',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea-field.html',
  styleUrl: './textarea-field.css',
})
export class TextareaField {
  id = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
  control = input.required<FormControl>();
}
