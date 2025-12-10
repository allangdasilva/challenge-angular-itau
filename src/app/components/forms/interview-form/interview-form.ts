import { Component } from '@angular/core';
import { InputField } from '../../ui/form/input-field/input-field';
import { SelectField } from '../../ui/form/select-field/select-field';

@Component({
  selector: 'app-interview-form',
  imports: [InputField, SelectField],
  templateUrl: './interview-form.html',
  styleUrl: './interview-form.css',
})
export class InterviewForm {
  selectVecancyValues: string[] = ['Backend', 'Frontend', 'QA'];
  selectLevelValues: string[] = ['Jr', 'Pl', 'Sn'];
}
