import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menue',
  templateUrl: './profile-menue.component.html',
  styleUrls: ['./profile-menue.component.css']
})
export class ProfileMenueComponent implements OnInit {

  // public logedin = false;
  constructor() { }

  ngOnInit() {
  }

  isLogedin(): boolean {
    return !!localStorage.getItem('loggedin');
  }

  logOut() {
    localStorage.removeItem('loggedin');
    console.log('loggedin token deleted');
  }

}
