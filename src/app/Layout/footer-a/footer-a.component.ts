import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
@Component({
  selector: 'app-footer-a',
  templateUrl: './footer-a.component.html',
  styleUrls: ['./footer-a.component.css']
})
export class FooterAComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
