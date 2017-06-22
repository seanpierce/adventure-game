import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  providers: [GameService],
  animations: [
  trigger('heroState', [
    state('inactive', style({
      backgroundColor: '#000',
    })),
    state('active',   style({
      backgroundColor: '#000',
    })),
    transition('* => *', [
      animate(1000, keyframes([
        style({'background-color': 'rgb(0,0,0)', offset: 0}),
        style({'background-color': 'rgb(9, 9, 9)', offset: 0.1}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 0.11}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 0.45}),
        style({'background-color': 'rgb(7, 7, 7)', offset: 0.50}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 0.55}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 0.70}),
        style({'background-color': 'rgb(125, 125, 125)', offset: 0.72}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 0.74}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 0.89}),
        style({'background-color': 'rgb(4, 4, 4)', offset: 0.95}),
        style({'background-color': 'rgb(0, 0, 0)', offset: 1.0})
      ]))
    ])
  ])
]
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
  animationState;
  playerCount = 0;

  toggleState(){
    if(this.animationState === 'active'){
      this.animationState = 'inactive';
    } else {
      this.animationState = 'active';
    }
  }

  ngOnInit() {
    let playerId;
    this.route.params.forEach((urlParameters) => {
      playerId = urlParameters['id']
    });

    this.gameService.allCharacters().subscribe(data => {
      if(this.playerCount < data.length){
        this.toggleState();
      }
      this.playerCount = data.length;
    });

    this.gameService.allScenes().subscribe(dataLastEmitted => {
      this.dbScenes = dataLastEmitted;
      // console.log(this.dbScenes)
    });

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
      this.player.failCount += 1;
      this.currentScene.resolution = {
        text: choice.fail.text,
        id: choice.fail.id
      }
    }
  }

  endIt() {
    this.router.navigate([`/intro`]);
  }
}
