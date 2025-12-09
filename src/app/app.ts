import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterviewForm } from './components/forms/interview-form/interview-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterviewForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('challenge-angular-itau');
}
