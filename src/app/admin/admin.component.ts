import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
const authPass = 'PRIMEEVENT@';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isAdmin: string = '';
  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}
  password: any;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isAdmin = localStorage.getItem('admin')?.toString() ?? '';
    }
  }
  onChange() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (this.password == authPass) {
      localStorage.setItem('admin', 'login');
      this.isAdmin = localStorage.getItem('admin')?.toString() ?? '';
      this.password = '';
    }
  }
  logout() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    localStorage.removeItem('admin');
    this.isAdmin = '';
  }
}
