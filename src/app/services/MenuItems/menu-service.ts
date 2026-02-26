import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMenuItem } from '../../Interfaces/IMenu/IMenu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  
  private apiUrl = "http://localhost:5161/api/";
  private readonly httpclint = inject(HttpClient);
  getMenuItemsByBranch(branchId: number) {
  return this.httpclint.get<IMenuItem[]>(`${this.apiUrl}MenuItemContorller/branch/${branchId}`);
}
}
