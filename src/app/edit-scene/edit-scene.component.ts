import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-edit-scene',
  templateUrl: './edit-scene.component.html',
  styleUrls: ['./edit-scene.component.css'],
  providers: [GameService]
})
// NOTE: explore passing scene key rather than scene
export class EditSceneComponent implements OnInit {
  @Input() scene;
  scenes: FirebaseListObservable<any[]>;
  sceneData;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.scenes = this.gameService.allScenes();
    this.gameService.getSceneById(this.scene.$key).subscribe(dataLastEmitted => {
      this.sceneData = dataLastEmitted;
    })
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

}
