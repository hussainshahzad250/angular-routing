import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';


@Component({
  selector: 'app-nav',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class Services implements OnInit {

  constructor(private navService: CommonService) { }

  ngOnInit() {

  }
}

