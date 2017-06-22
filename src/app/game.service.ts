import { Injectable } from '@angular/core';
import { Scene } from './models/scene.model';
import { DB } from './static-db';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class GameService {
  scenes: FirebaseListObservable<any[]>;
  characters: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.scenes = database.list('scenes');
    this.characters = database.list('characters');
  }

  allCharacters(){
    return this.characters;
  }

  getSceneById(id){
    return this.database.object('scenes/' + id);
  }

  allScenes() {
    return this.scenes;
  }

  getPlayerById(id){
    return this.database.object('characters/' + id)
  }

  addScene(scene: Scene){
    this.scenes.push(scene);
  }

  updateScene(localScene){
    let dbScene = this.getSceneById(localScene.$key);
    dbScene.update({
      endGame: localScene.endGame || false,
      title: localScene.title,
      text: localScene.text
    })
  }

  updatePlayer(localPlayer){
    let dbPlayer = this.getPlayerById(localPlayer.$key);
    dbPlayer.update({
      currentScene: localPlayer.currentScene
    })
  }

  addChoice(localScene){
    let dbScene = this.getSceneById(localScene.$key)
    dbScene.update({
      choices: localScene.choices
    })
  }

  saveCharacter(character) {
    let out = this.characters.push(character);
  }

  deletePlayer(localPlayer){
    let dbPlayer = this.getPlayerById(localPlayer.$key);
    dbPlayer.remove();
  }

}
