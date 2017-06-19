import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing import
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { AdminComponent } from './admin/admin.component';
import { SceneComponent } from './scene/scene.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenariosComponent,
    AdminComponent,
    SceneComponent
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
