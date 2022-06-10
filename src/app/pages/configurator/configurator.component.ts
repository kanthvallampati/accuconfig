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
      {'id': '59e2241a-e7c3-11ec-8fea-0242ac120002', 'env':'dev12'},
      {'id': '62953bb0-e7c3-11ec-8fea-0242ac120002', 'env':'test11'},
      {'id': '67be47c6-e7c3-11ec-8fea-0242ac120002', 'env':'test15'},
      {'id': '6d12ad34-e7c3-11ec-8fea-0242ac120002', 'env':'uat1'},
      {'id': '726c6fa4-e7c3-11ec-8fea-0242ac120002', 'env':'uat2'},
      {'id': '7844a5ae-e7c3-11ec-8fea-0242ac120002', 'env':'test35'},
      {'id': '7d7a706c-e7c3-11ec-8fea-0242ac120002', 'env':'lt'},
      {'id': '838cf812-e7c3-11ec-8fea-0242ac120002', 'env':'cstg'},
      {'id': '88f517d0-e7c3-11ec-8fea-0242ac120002', 'env':'prod'}
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
