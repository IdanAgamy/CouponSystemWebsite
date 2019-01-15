import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
import { ApplicarionError } from 'src/app/Models/applicationError';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {

  public subscription: Subscription;
  public message: ApplicarionError;


  constructor(private errorServ: ErrorService) { }

  ngOnInit() {
    this.subscription = this.errorServ.getMessage().subscribe(message => this.message = message);
  }

}
