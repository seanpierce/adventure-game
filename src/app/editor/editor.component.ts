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
    // this.scenes.push(newScene);
    this.gameService.addScene(newScene);
  }


  addChoice(key, params){
    console.log(key);
    console.log(this.scenes)
    // let index = this.scenes.findIndex(function(f){
    //   return f.$key === key;
    // });

    // this.gameService.addChoice(key, params);

    // this.scenes[index].choices.push({
    //   text: params.text || 'default choice',
    //   success: {
    //     text: params.success || 'default success text',
    //     id: params.successId,
    //   },
    //   fail: {
    //     text: params.fail || 'default fail text',
    //     id: params.failId
    //   }
    // })



  }


}
