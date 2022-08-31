import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  user: string | null = '';
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }
  selectDashboard(key: number) {
    if (key === 1) this.router.navigate(['/articles']);
    else if (key === 2) this.router.navigate(['/articles/create']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
