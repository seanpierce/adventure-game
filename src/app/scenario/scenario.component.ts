import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css'],
  providers: [GameService]
})
export class ScenarioComponent implements OnInit {

  constructor(private gameService: GameService) { }
  scenarios = [];

  ngOnInit() {
    this.scenarios = this.gameService.allScenarios();
  }

}
