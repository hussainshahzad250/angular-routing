import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']


})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("Hii");
  }
}
