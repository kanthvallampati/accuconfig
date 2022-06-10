import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspacesComponent } from 'src/app/pages/workspaces/workspaces.component';
import { ApplicationsComponent } from 'src/app/pages/applications/applications.component';
import { ConfiguratorComponent } from 'src/app/pages/configurator/configurator.component';

const routes: Routes = [
  { path: 'workspaces', component: WorkspacesComponent },
  { path: 'applications/:id', component: ApplicationsComponent },
  { path: 'configurator/:id', component: ConfiguratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
