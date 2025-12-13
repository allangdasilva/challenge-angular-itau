import { Component } from '@angular/core';
import { InputField } from '../../ui/form/input-field/input-field';
import { SelectField } from '../../ui/form/select-field/select-field';
import { TextareaField } from '../../ui/form/textarea-field/textarea-field';
import { ButtonSubmit } from '../../ui/form/button-submit/button-submit';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-interview-form',
  imports: [InputField, SelectField, TextareaField, ButtonSubmit, ReactiveFormsModule],
  templateUrl: './interview-form.html',
  styleUrl: './interview-form.css',
})
export class InterviewForm {
  selectVecancyValues: string[] = ['Backend', 'Frontend', 'QA'];
  selectLevelValues: string[] = ['Jr.', 'Pl.', 'Sn.'];

  interviewForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    vecancy: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    message: new FormControl(''),
  });

  formSubmit() {
    console.log({
      firstName: this.interviewForm.value.firstName,
      lastName: this.interviewForm.value.lastName,
      vecancy: this.interviewForm.value.vecancy,
      level: this.interviewForm.value.level,
      message: this.interviewForm.value.message,
    });
  }
}
