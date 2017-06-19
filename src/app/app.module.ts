import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Character } from './models/character.model';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionListComponent } from './intro/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
