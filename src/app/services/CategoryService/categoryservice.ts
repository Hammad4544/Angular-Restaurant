import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Categoryservice {
   private apiUrl = "http://localhost:5161/api/";
  private readonly httpclint = inject(HttpClient);

  getAllCategory() { return this.httpclint.get<any>(`${this.apiUrl}Category`)};
}
