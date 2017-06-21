import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { questions } from './questions';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  providers: [GameService]
})
export class IntroComponent implements OnInit {

  player;
  questions;
  questionIncrementer: number = 1;
  userCodeError;

  constructor(private router: Router, private gameService: GameService) {
    this.player
    this.questions = questions;

  }

  ngOnInit() {
  }

  updateStats(player, str, int, char) {
    player.strength += str;
    player.intelligence += int;
    player.charisma += char;
  }

  startGame(player) {
    this.gameService.saveCharacter(player);
    this.gameService.allCharacters().subscribe(charData => {
      let currentPlayer = charData.slice(-1)[0];
      setTimeout(() => {
        this.router.navigate([`/scene/${currentPlayer.$key}`]);
      }, 2000);
    });

  }

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

  createCharacter(name) {
    this.player = new Character(name, 10, 10, 10, "-Kn6Vix9TqbUFt_2Njn7");
  }

  collectId(id) {
    let valid = false;
    this.gameService.allCharacters().subscribe(data => {
      data.forEach(function(char){
        if(id === char.$key){
          valid = true;
        }
      })

      if(valid) {
        this.router.navigate(['scene/'+id]);
      } else {
        this.userCodeError = "That was not a valid code!";
      }
    });
  }
}
