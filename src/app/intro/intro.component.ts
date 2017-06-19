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
      new Question(2, "Why are you here?", ["I don't know, get me out of here!", "I think this is a dream. I must be sleeping", "I'm searching for meaning."]),
      new Question(3, "Have you been here before?", ["No, I only push forward.", "Still trying to understand what here is.", "Everything is a cycle."]),
      new Question(4, "You think back to how you got here. Something was following you. What did you do?", ["I turned to confront it.", "I hid from it.", "I called out to it."]),
      new Question(5, "Did that work?", ["Of course, I'm alive aren't I?", "I don't know.", "I'm here, so I guess so."]),
      new Question(6, "Were you afraid?", ["I'm never afraid.", "I feel afraid, but I reason my way through it.", "Fear is helpful. It's part of who I am."]),
      new Question(7, "Have you been asleep this whole time?", ["It's too real for that. I'll sleep when I'm dead.", "It seems likely, but I haven't seen enough to know", "Whether I am or not I'm conscious."]),
      new Question(8, "If this were a dream, would you remember it?", ["I never remember my dreams.", "The relevant parts.", "The feeling of a dream stays with you."]),
      new Question(9, "Can your dreams predict the future?", ["How is that possible?", "Possibly, dreams echo what you're thinking.", "Certainly, dreams and reality build off of each other."]),
      new Question(10, "Everything feels faint. What do you do?", ["I trudge forward despite it.", "I take a moment to assess.", "I call out for help."])
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

  yesQues(player) {
    player.intelligence += 2;
  }

  noQues(player) {
    player.charisma += 2;
  }

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

}
