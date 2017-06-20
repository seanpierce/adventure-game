import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Scene } from '../models/scene.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [GameService]
})

export class EditorComponent implements OnInit {
  scenes: Scene[];

  constructor(private gameService: GameService){}

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
  }

  addScene(title: string, text: string){
    let newScene = new Scene(this.scenes.length.toString(),title || 'default title', text || 'default value');
    this.scenes.push(newScene);
  }

  addChoice(params){
    let index = this.scenes.findIndex(function(f){
      return f.id === params.scene;
    });

    this.scenes[index].choices.push({
      text: params.text || 'default choice',
      success: {
        text: params.success || 'default success text',
        id: params.successId,
      },
      fail: {
        text: params.fail || 'default fail text',
        id: params.failId
      }
    })



  }


}
