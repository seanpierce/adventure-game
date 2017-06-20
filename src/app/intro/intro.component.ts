import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { questions } from './questions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  player: Character;
  questions;
  questionIncrementer: number = 1;
  constructor(private router: Router) {
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

  yesQues(player) {
    setTimeout(() => {
      this.router.navigate(['/scene/0']);
    }, 2000);
    player.intelligence += 2;
    console.log(this.player);

  }

  noQues(player) {
    player.charisma += 2;
    setTimeout(() => {
      this.router.navigate(['/scene/0']);
    }, 2000);
  }

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

}
