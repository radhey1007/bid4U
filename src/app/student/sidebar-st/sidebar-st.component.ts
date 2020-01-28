import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-sidebar-st',
  templateUrl: './sidebar-st.component.html',
  styleUrls: ['./sidebar-st.component.css']
})
export class SidebarStComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  toggel() {
    jQuery(window).width() < 760 && jQuery("body").addClass("ttr-body-fixed"),
      jQuery("body").addClass("ttr-opened-sidebar");
    jQuery("body").toggleClass("ttr-pinned-sidebar");
  }
}
