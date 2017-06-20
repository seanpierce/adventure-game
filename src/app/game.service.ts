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

  findScene(id){
    // for(let i=0; i < DB.scene.length; i++){
    //   if(DB.scene[i].id === id){
    //     return DB.scene[i];
    //   }
    // }
  }

  allScenes() {
    return this.scenes;
  }
}
