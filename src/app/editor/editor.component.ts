import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Scene } from '../models/scene.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [GameService]
})

export class EditorComponent implements OnInit {
  scenes: FirebaseListObservable<any[]>;

  constructor(private gameService: GameService){}

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
  }

  addScene(title: string, text: string){
    let newScene = new Scene(title || 'default title', text || 'default value');
    this.gameService.addScene(newScene);
  }
}
