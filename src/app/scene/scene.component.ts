import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    private location: Location,
    private router: Router
  ) { }

  sceneId;
  scene;
  sceneData;
  decisionId;
  responseText;

  ngOnInit() {
    let id;
    this.route.params.forEach((urlParameters) => {
      id = urlParameters['id']
    });

    this.gameService.getSceneById(id).subscribe(dataLastEmitted => {
      console.log("onInit subscription triggered");
      this.sceneData = dataLastEmitted;
    })
  }

  nextScene(id){
    // this.router.navigate(['scene', id]);
    this.gameService.getSceneById(id).subscribe(dataLastEmitted => {
      this.sceneData = dataLastEmitted;
      console.log("nextScene subscription triggered");
    })
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
