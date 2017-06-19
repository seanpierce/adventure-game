import { Injectable } from '@angular/core';
import { Scene } from './scene.model';
import { DB } from './static-db';

@Injectable()
export class GameService {

  constructor() {}

  findScene(id){
    for(let i=0; i < DB.scene.length; i++){
      if(DB.scene[i].id === id){
        return DB.scene[i];
      }
    }
  }

  allScenes() {
    return DB.scene;
  }
}
