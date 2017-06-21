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
  player;

  ngOnInit() {
    let playerId;
    this.route.params.forEach((urlParameters) => {
      playerId = urlParameters['id']
    });

    this.gameService.allScenes().subscribe(dataLastEmitted => {
      this.dbScenes = dataLastEmitted;
      // console.log(this.dbScenes)
    })

    this.gameService.getPlayerById(playerId).subscribe(dataLastEmitted => {
      this.player = dataLastEmitted;

      this.gameService.getSceneById(this.player.currentScene).subscribe(dataLastEmitted => {
        this.currentScene = dataLastEmitted;
        this.currentScene.state = 'showing';
      })
    })
  }

  getSceneById(id){
    return this.dbScenes.find(function(scene){
      return scene.$key === id
    })
  }

  nextScene(id){
    this.currentScene = this.getSceneById(id);
    this.player.currentScene = this.currentScene.$key
    this.gameService.updatePlayer(this.player);
    this.currentScene.state = 'showing';
  }

  makeChoice(choice){
    this.currentScene.state = 'resolved';
    let roll = Math.floor(Math.random() * 20 + 1);
    let modifier = Math.floor((this.player[choice.difficulty.trait]) / 3);

    if (modifier + roll >= parseInt(choice.difficulty.score)){
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
