import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private apiUrl = "http://localhost:5161/api/";
  private readonly httpclint = inject(HttpClient);

  getAllBranches(){
    return this.httpclint.get<any>(`${this.apiUrl}Branch`);
  }




}
