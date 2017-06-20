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
  ) {}

  dbScenes;
  currentScene;
  decisionId;
  responseText;

  ngOnInit() {
    this.gameService.allScenes().subscribe(dataLastEmitted => {
      this.dbScenes = dataLastEmitted;
      // console.log(this.dbScenes)
    })

    let id;
    this.route.params.forEach((urlParameters) => {
      id = urlParameters['id']
    });

    this.gameService.getSceneById(id).subscribe(dataLastEmitted => {
      console.log("onInit subscription triggered");
      this.currentScene = dataLastEmitted;
      this.currentScene.state = 'showing';
    })
  }

  getSceneById(id){
    return this.dbScenes.find(function(scene){
      return scene.$key === id
    })
  }

  nextScene(id){
    this.currentScene = this.getSceneById(id);
    this.currentScene.state = 'showing';
  }

  makeChoice(choice){
    this.currentScene.state = 'resolved';
    if (Math.random() >= 0.5){
      this.currentScene.resolution = {
        text: choice.success.text,
        id: choice.success.id
      }
    } else {
      this.currentScene.resolution = {
        text: choice.fail.text,
        id: choice.fail.id
      }
    }
  }
}
