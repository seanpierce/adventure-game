import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {

  constructor() { }
  scenarios = [];
  ngOnInit() {
    this.scenarios.push(new Scenario("This is scenario 1"));
    this.scenarios.push(new Scenario("This is scenario 2"));
    this.scenarios.push(new Scenario("This is scenario 3"));
    this.scenarios.push(new Scenario("This is scenario 4"));
    this.scenarios.push(new Scenario("This is scenario 5"));
  }

}
