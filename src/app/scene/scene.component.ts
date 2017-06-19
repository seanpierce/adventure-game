import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scenario } from '../scenario.model';
=======
import { Scene } from '../scene.model';
>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484
import { GameService } from '../game.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  providers: [GameService]
})
<<<<<<< HEAD

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
=======
export class SceneComponent implements OnInit {

  constructor(private gameService: GameService) { }
  scenes = [];

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
  }

>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484
}
