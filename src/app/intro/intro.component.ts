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
  allPlayers;
  questions;
  scenes;
  questionIncrementer: number = 1;
  userCodeError;
  enterIntro: boolean = false;
  showQuestions: boolean = false;
  transitionEffect: boolean = false;

  constructor(private router: Router, private gameService: GameService) {
    this.questions = questions;
  }

  ngOnInit(){
    this.gameService.allCharacters().subscribe(data => {
      console.log('players subscription called');
      this.allPlayers = data;
    });

    this.gameService.allScenes().subscribe(data => {
      this.scenes = data;
    });
  }

  updateStats(player, str, int, char) {
    player.strength += str;
    player.intelligence += int;
    player.charisma += char;
  }

  startGame(player) {
    this.gameService.saveCharacter(player);
    let currentPlayer = this.allPlayers.slice(-1)[0];
      setTimeout(() => {
        this.router.navigate([`/scene/${currentPlayer.$key}`]);
      }, 2000);

  }

  nextQuestion(questionIncrementer) {
    this.questionIncrementer += 1;
  }

  createCharacter(name) {
    this.player = new Character(name, 10, 10, 10, this.scenes.slice(0)[0].$key, 0)
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
