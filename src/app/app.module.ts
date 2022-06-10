import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';
import { PrettyprintPipe } from './core/prettyprint.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkspacesComponent,
    ApplicationsComponent,
    ConfiguratorComponent,
    PrettyprintPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
