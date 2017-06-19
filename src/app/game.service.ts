import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { DB } from './static-db';

@Injectable()
export class GameService {

  constructor() {}

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
  }
}
