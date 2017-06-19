import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  providers: [GameService]
})

export class SceneComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  scene;
  decisionId;
  responseText;

  ngOnInit() {
    this.scene = this.gameService.findScene('0');

    this.scene.choices = ["yep","nope"];
    // this.choices = this.gameService.allChoices();
  }

  makeChoice(choice){
    this.decisionId = "";
    if (Math.random() >= 0.5){
      this.responseText = choice.sText;
      this.decisionId = choice.sId;
    } else {
      this.responseText = choice.fText;
      this.decisionId = choice.fId;
    }
  }
}
