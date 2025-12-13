import { Component, inject } from '@angular/core';
import { InputField } from '../../ui/form/input-field/input-field';
import { SelectField } from '../../ui/form/select-field/select-field';
import { TextareaField } from '../../ui/form/textarea-field/textarea-field';
import { ButtonSubmit } from '../../ui/form/button-submit/button-submit';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  FakeInterviewPayload,
  InterviewFormService,
} from '../../../services/interview-form.service';
import { SuccessForm } from '../../ui/form/success-form/success-form';

@Component({
  selector: 'app-interview-form',
  imports: [InputField, SelectField, TextareaField, ButtonSubmit, ReactiveFormsModule, SuccessForm],
  templateUrl: './interview-form.html',
  styleUrl: './interview-form.css',
})
export class InterviewForm {
  readonly _interviewFormService = inject(InterviewFormService);

  success = false;
  loading = false;
  error = false;

  selectVecancyValues: string[] = ['Backend', 'Frontend', 'QA'];
  selectLevelValues: string[] = ['Jr.', 'Pl.', 'Sn.'];

  interviewForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    vecancy: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    message: new FormControl(''),
  });

  submitForm() {
    if (this.interviewForm.invalid) {
      // markAllAsTouched: Quando o usuário clica em "Salvar" e o formulário tem erros, você chama markAllAsTouched() para que todos os campos inválidos mostrem suas mensagens de erro imediatamente, informando o que precisa ser corrigido.
      this.interviewForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    const payload: FakeInterviewPayload = this.interviewForm.getRawValue();

    this._interviewFormService.postInterview(payload).subscribe({
      next: () => {
        this.success = true;
        this.interviewForm.reset({
          vecancy: '',
          level: '',
        });
      },
      error: () => {
        this.error = true;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
