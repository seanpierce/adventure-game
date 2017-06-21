import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Scene } from '../models/scene.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [GameService]
})

export class EditorComponent implements OnInit {
  scenes: FirebaseListObservable<any[]>;
  defaultPlayer;
  defaultPlayerKey: string = '-KnA6vYA_Ayfas3HV5eb';

  constructor(private gameService: GameService, private router: Router){}

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
    this.gameService.getPlayerById(this.defaultPlayerKey).subscribe(data => {
      this.defaultPlayer = data;
    })
  }

  addScene(title: string, text: string){
    let newScene = new Scene(title || 'default title', text || 'default value');
    this.gameService.addScene(newScene);
  }

  demoScene(sceneId){
    this.defaultPlayer.currentScene = sceneId;
    this.gameService.updatePlayer(this.defaultPlayer);
    this.router.navigate(['scene/' + this.defaultPlayer.$key]);
  }
}
