import { Injectable } from '@angular/core';
import { Reminder } from '../model/Reminder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  //private baseUrl = "https://saarthi-7f7j.onrender.com"
  private baseUrl = "https://localhost:8080"
  reminders: Reminder[] | undefined;
  constructor(private httpclient : HttpClient) { }

  getAllTestList(): Observable<Reminder[]>{
    return this.httpclient.get<Reminder[]>(`${this.baseUrl}`+'/gettest');
  }

  saveReminder(reminder: Reminder): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`+'/reminder/save', reminder);
  }
}
