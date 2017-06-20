import { Injectable } from '@angular/core';
import { Scene } from './models/scene.model';
import { DB } from './static-db';

@Injectable()
export class GameService {

  constructor() {
    this.findScene("0").choices.push({
      text: "Go to Graveyard Gate",
      success: {
        text: "You get to the gate, no harm done",
        id: "1"
      },
      fail: {
        text: "You get to the gate, but you're butt hurt 🤔",
        id: "1"
      }
    },
    {
      text: "Go to Creek Bed",
      success: {
        text: "You get to the Creek Bed, no harm done",
        id: "2"
      },
      fail: {
        text: "You get to the Creek Bed, but you're butt hurt 🤔",
        id: "2"
      }
    });
  }
  //CHOICE (text, success{text, id}, fail{text, id})

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
