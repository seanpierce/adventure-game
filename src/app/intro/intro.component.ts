import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  player: Character;
  question1 = true;

  constructor() {
    this.player = new Character(10, 10, 10);
  }

  ngOnInit() {
  }

  addStr(player) {
    player.strength += 2;
    player.intelligence -= 1;
    player.charisma -= 1;
  }
  addInt(player) {
    player.intelligence += 2;
    player.strength -= 1;
    player.charisma -= 1;
  }
  addChar(player) {
    player.charisma += 2;
    player.intelligence -= 1;
    player.strength -= 1;
  }

}
