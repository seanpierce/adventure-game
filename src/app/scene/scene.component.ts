import { Component, OnInit } from '@angular/core';
import { Scene } from '../scene.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  providers: [GameService]
})
export class SceneComponent implements OnInit {

  constructor(private gameService: GameService) { }
  scenes = [];

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
  }

}
