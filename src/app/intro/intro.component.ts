import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Question } from '../models/question.model';

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
    this.questions = [
      new Question(1, "Question 1", ["A", "B", "C"]),
      new Question(2, "Question 2", ["A", "B", "C"]),
      new Question(3, "Question 3", ["A", "B", "C"]),
      new Question(4, "Question 4", ["A", "B", "C"]),
      new Question(5, "Question 5", ["A", "B", "C"]),
      new Question(6, "Question 6", ["A", "B", "C"]),
      new Question(7, "Question 7", ["A", "B", "C"]),
      new Question(8, "Question 8", ["A", "B", "C"]),
      new Question(9, "Question 9", ["A", "B", "C"]),
      new Question(10, "Question 10", ["A", "B", "C"])
    ];
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

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

}
