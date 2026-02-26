import { Component, inject } from '@angular/core';
import { BranchService } from '../../services/BranchService/branch-service';
import { IBranchDto } from '../../Interfaces/IBranch/IBranchDto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private branchService = inject(BranchService);
  branches: IBranchDto[] = [];

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.branchService.getAllBranches().subscribe({
      next: (data) => {
        this.branches = data;
        console.log(this.branches);
      },
      error: (err) => {
        console.error('Error fetching branches', err);
      }
    });
  }


}
