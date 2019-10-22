import { SeriersresolverService } from './seriersresolver.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [SeriersresolverService]
})
export class SeriesComponent implements OnInit {
subjectInfo={}
seriesList:any=[];
  constructor(public route: Router, private actRoute: ActivatedRoute,public storage: StorageService,) {
    console.log('****** Compoentnt***********');
    console.log(this.route.getCurrentNavigation().extras.state);
    let subjectData=this.storage.getUserSettings('subject');
    if(subjectData){
      this.subjectInfo=subjectData;
    }
   }

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log(data)
    });
  }

}
