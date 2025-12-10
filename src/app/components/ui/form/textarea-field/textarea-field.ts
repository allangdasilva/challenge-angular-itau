import { Component, input } from '@angular/core';

@Component({
  selector: 'app-textarea-field',
  imports: [],
  templateUrl: './textarea-field.html',
  styleUrl: './textarea-field.css',
})
export class TextareaField {
  id = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
}
