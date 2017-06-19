import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  player: Character;

  constructor() {
    this.player = new Character(10, 10, 10);
  }

  ngOnInit() {
  }

}
