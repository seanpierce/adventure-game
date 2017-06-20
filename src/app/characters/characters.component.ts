import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [GameService]
})

export class CharactersComponent implements OnInit {
  constructor(private gameService: GameService) {
  }

  characters;

  ngOnInit() {
    this.characters = this.gameService.allCharacters();
  }

}
