import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {

  listedWSs: any;

  constructor() { }

  ngOnInit(): void {
    this.getWorkspaces();
  }


  getWorkspaces() {
    this.listedWSs = [
      {'id': '70a2d798-e7d8-11ec-8fea-0242ac120002', 'wsTitle': 'Workspace A'},
      {'id': '7bcd70c4-e7d8-11ec-8fea-0242ac120002', 'wsTitle': 'Workspace B'}
    ];
  }
}
