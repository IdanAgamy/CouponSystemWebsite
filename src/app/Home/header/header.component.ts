import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isAdmin(): boolean {
    const userType = localStorage.getItem('userType');
    return userType === 'ADMIN';
  }

}
