import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menue',
  templateUrl: './profile-menue.component.html',
  styleUrls: ['./profile-menue.component.css']
})
export class ProfileMenueComponent implements OnInit {

  public logedin = false;
  constructor() { }

  ngOnInit() {
  }

}