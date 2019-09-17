import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'about-list',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']


})
export class About implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("Hii");
  }
}
