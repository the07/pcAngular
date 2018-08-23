import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  firstName = null;
  lastName = null;

  constructor() { }

  ngOnInit() {
  }

  generateUserKeys() {
    console.log("Hello " + this.firstName + " " + this.lastName);
  }

}
