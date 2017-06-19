import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { DB } from './static-db';

@Injectable()
export class GameService {

  constructor() {}

  allScenarios() {
    return DB.scenario;
  }

}
