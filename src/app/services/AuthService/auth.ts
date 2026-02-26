import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = "http://localhost:5161/api/";
  private readonly httpclint = inject(HttpClient)

  Login(Formdata : FormData): Observable<any>{
    return this.httpclint.post(`${this.apiUrl}Auth/login`,Formdata);
  }

  Register(Formdata : FormData): Observable<any>{
    return this.httpclint.post(`${this.apiUrl}Auth/register`,Formdata);
  }
}
