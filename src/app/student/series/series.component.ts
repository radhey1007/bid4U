import { SeriersresolverService } from './seriersresolver.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [SeriersresolverService]
})
export class SeriesComponent implements OnInit {
subjectInfo={}
  constructor(public route: Router, private actRoute: ActivatedRoute,) {
    console.log('****** Compoentnt***********');
    console.log(this.route.getCurrentNavigation().extras.state);
    this.subjectInfo=this.route.getCurrentNavigation().extras.state;
   }

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log(data)
    });
  }

}
