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
  constructor(private gameService: GameService){}

  characters;
  scenes;

  ngOnInit() {
    this.gameService.allScenes().subscribe(data => {
      this.scenes = data;
    });
    this.characters = this.gameService.allCharacters();
  }

  sceneName(id){
    let out = this.scenes.find(function(s){
      return s.$key === id;
    });
    return out ? out.title : "undefined";
  }

  delete(character){
    this.gameService.deletePlayer(character);
  }

}
