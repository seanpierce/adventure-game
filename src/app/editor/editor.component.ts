import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Scenario } from '../scenario.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [GameService]
})

export class EditorComponent implements OnInit {
  scenarios: Scenario[];

  constructor(private gameService: GameService){}

  ngOnInit() {
    this.scenarios = this.gameService.allScenarios();
  }

  addScenario(text: string){
    let newScenario = new Scenario(this.scenarios.length.toString(), text || 'default value');
    this.scenarios.push(newScenario);
  }

  addChoice(params){
    let index = this.scenarios.findIndex(function(f){
      return f.id === params.scenario;
    });

    this.scenarios[index].choices.push({
      text: params.text || 'default choice',
      success: {
        text: params.success || 'default success text',
        id: params.successId,
      },
      fail: {
        text: params.fail || 'default fail text',
        id: params.failId
      }
    })



  }


}
