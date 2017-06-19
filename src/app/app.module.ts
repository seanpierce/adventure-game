import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Character } from './models/character.model';

// routing import
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SceneComponent } from './scene/scene.component';
import { AdminComponent } from './admin/admin.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SceneComponent,
    AdminComponent,
    EditorComponent
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
