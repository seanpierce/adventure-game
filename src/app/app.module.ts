import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing import
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { AdminComponent } from './admin/admin.component';
import { SitchComponent } from './sitch/sitch.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenariosComponent,
    AdminComponent,
    SitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
