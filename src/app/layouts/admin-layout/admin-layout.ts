import { Component } from '@angular/core';
import { AdminSidebar } from "../../shared/admin-sidebar/admin-sidebar";
import { AdminNavbar } from "../../shared/admin-navbar/admin-navbar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  imports: [AdminSidebar, AdminNavbar, RouterModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {

}
