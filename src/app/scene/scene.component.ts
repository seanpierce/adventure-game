import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scenario } from '../scenario.model';
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

  scenario;
  choices = [];
  decisionId;
  responseText;

  ngOnInit() {
    this.route.params.forEach((params) => {
      this.scenario = this.gameService.findScenario(params['id']);
    })
    this.choices = this.gameService.allChoices();
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
