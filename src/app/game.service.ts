import { Injectable } from '@angular/core';
import { Scene } from './scene.model';
import { DB } from './static-db';

@Injectable()
export class GameService {

  constructor() {}

<<<<<<< HEAD
  allScenarios() {
    return DB.scenario;
  }

  findScenario(id){
    for(let i=0; i < DB.scenario.length; i++){
      if(DB.scenario[i].id === id){
        // console.log(DB.scenario[i]);
        return DB.scenario[i];
      }
    }
  }
  
  allChoices() {
    return DB.choice;
=======
  allScenes() {
    return DB.scene;
>>>>>>> d3d4e40d51b21238bab283cf895d5e54638a0484
  }
}
