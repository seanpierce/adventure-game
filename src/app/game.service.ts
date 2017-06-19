import { Injectable } from '@angular/core';
import { Scene } from './scene.model';
import { DB } from './static-db';

@Injectable()
export class GameService {

  constructor() {}

  allScenes() {
    return DB.scene;
  }

}
