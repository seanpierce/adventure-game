import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing import
import { routing } from './app.routing';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ScenariosComponent } from './scenarios/scenarios.component';
import { AdminComponent } from './admin/admin.component';
import { SceneComponent } from './scene/scene.component';
=======
import { SceneComponent } from './scene/scene.component';
import { AdminComponent } from './admin/admin.component';
import { EditorComponent } from './editor/editor.component';
>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ScenariosComponent,
    AdminComponent,
    SceneComponent
=======
    SceneComponent,
    AdminComponent,
    EditorComponent
>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484
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
