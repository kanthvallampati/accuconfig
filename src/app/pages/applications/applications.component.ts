import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  wsId: any;
  listedApps: any;

  constructor(private _Activatedroute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.wsId = params.get('id'); 
      this.getAppsByWsId(this.wsId);
    });
  }

  getAppsByWsId(target: any) {
    console.log('Selected workspace - ', target);
    this.listedApps = [
      {'id': '8b998f16-e7dc-11ec-8fea-0242ac120002', 'appTitle': 'App A'},
      {'id': '93b4648c-e7dc-11ec-8fea-0242ac120002', 'appTitle': 'App B'},
      {'id': 'a8d23844-e7dc-11ec-8fea-0242ac120002', 'appTitle': 'App C'},
      {'id': 'aeac7f86-e7dc-11ec-8fea-0242ac120002', 'appTitle': 'App D'}
    ];
  }

}
