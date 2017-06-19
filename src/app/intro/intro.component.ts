import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { questions } from './questions';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  player: Character;
  questions;
  questionIncrementer: number = 1;

  constructor() {
    this.player = new Character(10, 10, 10);
    this.questions = questions;
  }

  ngOnInit() {
  }

  updateStats(player, str, int, char) {
    player.strength += str;
    player.intelligence += int;
    player.charisma += char;
    console.log(this.player);
  }

  shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
  }

  yesQues(player) {
    player.intelligence += 2;
    console.log(this.player);
  }

  noQues(player) {
    player.charisma += 2;
    console.log(this.player);
  }

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

}
