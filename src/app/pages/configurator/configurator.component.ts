import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit, OnDestroy{

  appId: any;
  listedEnvs: any = [];
  listedVersions: any = [];
  selectedEnv: any = '';
  selectedVersion: any = '';
  configData: any = null;

  constructor(private _Activatedroute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.appId = params.get('id'); 
      this.getEnvs(this.appId);
    });
  }

  getEnvs(target: any) {
    console.log('Selected app - ', target);
    this.listedEnvs = [
      {'id': '59e2241a-e7c3-11ec-8fea-0242ac120002', 'env':'dev'},
      {'id': '838cf812-e7c3-11ec-8fea-0242ac120002', 'env':'staging'},
      {'id': '88f517d0-e7c3-11ec-8fea-0242ac120002', 'env':'production'}
    ];
  }

  onEnvChange(target: any) {
    this.selectedEnv = target.id;
    this.getVersions(target);
  }

  getVersions(theTarget: any) {
    this.listedVersions = [
      {'id': 'c9b798ce-e7c3-11ec-8fea-0242ac120002', 'version': '1.0'},
      {'id': 'cf5c3d52-e7c3-11ec-8fea-0242ac120002', 'version': '1.2'},
      {'id': 'd4ec0a90-e7c3-11ec-8fea-0242ac120002', 'version': '1.5'}
    ];
  }

  onVersionChange(target: any) {
    this.selectedVersion = target.id;
    this.getConfiguration(target);
  }

  getConfiguration(theTarget: any) {
    this.configData = {
      "color": "red",
      "wheels": 4,
      "engine": {
        "cylinders": 4,
        "size": 2.2
      }
    };

  }

  ngOnDestroy() {

  }

}
