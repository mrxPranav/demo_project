import { Injectable } from '@angular/core';
import { Reminder } from '../model/Reminder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private baseUrl = "https://saarthi-7f7j.onrender.com/api"
 // private baseUrl = "http://localhost:8080/api"
  reminders: Reminder[] | undefined;
  constructor(private httpclient : HttpClient) { }

  getAllTestList(): Observable<Reminder[]>{
    return this.httpclient.get<Reminder[]>(`${this.baseUrl}`+'/reminder/getall');
  }

  saveReminder(reminder: Reminder): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`+'/reminder/save', reminder);
  }

  delReminder(id: number): Observable<any> {   
    return this.httpclient.delete(`${this.baseUrl}`+'/reminder/delete/'+id, { responseType: 'text' });  
  }
  // deleteReminder(reminder: Reminder): Observable<Object>{
  //   return this.httpclient.delete(`${this.baseUrl}`+'/reminder/delete', 
  //   {headers : new HttpHeaders({'Content-Type': 'application/json'}), body : reminder});
  // }
}
