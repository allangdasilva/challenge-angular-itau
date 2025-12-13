import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InterviewFormService {
  submitForm(firstName: string, lastName: string, vecancy: string, level: string, message: string) {
    console.log({
      firstName,
      lastName,
      vecancy,
      level,
      message,
    });
  }
}
