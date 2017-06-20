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
    this.scene = this.gameService.getSceneById('-Kn5HfwdeyGD08eHUTnU');

    // this.scene.choices = ["yep","nope"];
    // this.choices = this.gameService.allChoices();
  }

  makeChoice(choice){
    this.decisionId = "";
    if (Math.random() >= 0.5){
      this.responseText = choice.success.text;
      this.decisionId = choice.success.id;
    } else {
      this.responseText = choice.fail.text;
      this.decisionId = choice.fail.id;
    }
  }
}
