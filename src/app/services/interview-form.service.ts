import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FakeInterviewPayload {
  firstName: string | null;
  lastName: string | null;
  vecancy: string | null;
  level: string | null;
  message: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class InterviewFormService {
  private readonly _httpClient = inject(HttpClient);

  private url = 'http://localhost:3000/send-email';

  postInterview(payload: FakeInterviewPayload): Observable<any> {
    return this._httpClient.post(this.url, payload);
  }
}
