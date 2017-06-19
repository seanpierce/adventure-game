import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css'],
  providers: [GameService]
})
export class ScenariosComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }
  scenarios = [];

  ngOnInit() {
    this.scenarios = this.gameService.allScenarios();
  }

  goToScene(scenario) {
    this.router.navigate(['scene', scenario.id]);
  }

}
