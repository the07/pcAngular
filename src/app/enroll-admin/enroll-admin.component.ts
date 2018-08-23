import { Component, OnInit } from '@angular/core';
import {EnrollService } from '../enroll.service';

@Component({
  selector: 'app-enroll-admin',
  templateUrl: './enroll-admin.component.html',
  styleUrls: ['./enroll-admin.component.css']
})
export class EnrollAdminComponent implements OnInit {

  protected enrollservice;

  constructor(enrollservice: EnrollService) {
    this.enrollservice = enrollservice;
   }

  ngOnInit() {
  }

  enrollAdmin() {
    console.log("Enrolling admin");
    this.enrollservice.enrolladmin();
  }

}
