import { Component } from '@angular/core';
import { InputField } from '../../ui/form/input-field/input-field';
import { SelectField } from '../../ui/form/select-field/select-field';
import { TextareaField } from '../../ui/form/textarea-field/textarea-field';
import { ButtonSubmit } from '../../ui/form/button-submit/button-submit';

@Component({
  selector: 'app-interview-form',
  imports: [InputField, SelectField, TextareaField, ButtonSubmit],
  templateUrl: './interview-form.html',
  styleUrl: './interview-form.css',
})
export class InterviewForm {
  selectVecancyValues: string[] = ['Backend', 'Frontend', 'QA'];
  selectLevelValues: string[] = ['Jr.', 'Pl.', 'Sn.'];
}
