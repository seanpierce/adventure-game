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
      new Question(1, "Who are you?", ["I'm me. Who else would I be?", "I'm who I've always been.", "Can you  tell me?"]),
      new Question(2, "Why are you here?", ["How would I know?", "It feels like a dream.", "To find meaning."]),
      new Question(3, "Have you been here before?", ["No, I only move forward.", "Still trying to understand what here is.", "Everything is a cycle."]),
      new Question(4, "You think back to how you got here. Something was following you. What did you do?", ["I turned to confront it.", "I hid from it.", "I called out to it."]),
      new Question(5, "Did that work?", ["Of course.", "I don't know.", "I'm here so I guess so."]),
      new Question(6, "Did you give in to your fear?", ["I'm never afraid.", "I feel afraid but I can't remember.", "Fear is helpful."]),
      new Question(7, "Have you been asleep this whole time?", ["It's too real for that.", "It seems likely, but who can know?", "I must be."]),
      new Question(8, "If this were a dream, would you remember it?", ["I never remember my dreams.", "The relevant parts.", "The feeling of a dream stays with you."]),
      new Question(9, "Can your dreams predict the future?", ["How is that possible?", "They echo what you're thinking.", "Dreams and reality build off of each other."]),
      new Question(10, "Everything feels faint. What do you do?", ["I trudge forward.", "I stop and think.", "I call out for help."]),
      new Question(11, "Are you ready to wake up?", ["yes", "no"])
    ];
  }

  ngOnInit() {
  }

  addStr(player) {
    player.strength += 2;
    player.intelligence -= 1;
    player.charisma -= 1;
    console.log(this.player);
  }
  addInt(player) {
    player.intelligence += 2;
    player.strength -= 1;
    player.charisma -= 1;
    console.log(this.player);
  }
  addChar(player) {
    player.charisma += 2;
    player.intelligence -= 1;
    player.strength -= 1;
    console.log(this.player);
  }

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

}
