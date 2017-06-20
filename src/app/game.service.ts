import { Injectable } from '@angular/core';
import { Scene } from './models/scene.model';
import { DB } from './static-db';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class GameService {
  scenes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.scenes = database.list('scenes');
  }

  getSceneById(id){
    return this.database.object('scenes/' + id);
  }

  allScenes() {
    return this.scenes;
  }

  addScene(scene: Scene){
    this.scenes.push(scene);
  }

  updateScene(localScene){
    let dbScene = this.getSceneById(localScene.$key);
    dbScene.update({
      title: localScene.title,
      text: localScene.text
    })
  }

  addChoice(localScene){
    let dbScene = this.getSceneById(localScene.$key)
    dbScene.update({
      choices: localScene.choices
    })
  }

}
