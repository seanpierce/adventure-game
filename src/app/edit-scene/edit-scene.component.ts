import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-edit-scene',
  templateUrl: './edit-scene.component.html',
  styleUrls: ['./edit-scene.component.css'],
  providers: [GameService]
})
export class EditSceneComponent implements OnInit {
  @Input() sceneId;
  @Output() playerUpdate = new EventEmitter();

  scenes;
  sceneData;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
    this.gameService.allScenes().subscribe(data => {
      this.scenes = data;
    })
    this.gameService.getSceneById(this.sceneId).subscribe(dataLastEmitted => {
      this.sceneData = dataLastEmitted;
    });
  }

  deleteChoice(choice){
    let i = this.sceneData.choices.findIndex(function(c){
      return c.text === choice.text && c.fail.text === choice.fail.text && c.success.text === choice.success.text;
    });
    this.sceneData.choices.splice(i,1);
    this.gameService.addChoice(this.sceneData);
  }

  addChoice(params){
    if (!this.sceneData.choices) {
      this.sceneData.choices = [];
    }
    this.sceneData.choices.push({
      text: params.text || 'default choice',
      difficulty: {
        trait: params.trait,
        score: params.score || '0'
      },
      success: {
        text: params.success || 'default success text',
        id: params.successId,
      },
      fail: {
        text: params.fail || 'default fail text',
        id: params.failId
      }
    })
    this.gameService.addChoice(this.sceneData);
  }

  updateScene(scene){
    this.gameService.updateScene(scene);
  }

  demoScene(){
    this.playerUpdate.emit(this.sceneData.$key);
  }

  sceneName(id){
    let out  = this.scenes.find(function(s){
      return s.$key === id;
    });
    return out ? out.title : "undefined";
  }
}
