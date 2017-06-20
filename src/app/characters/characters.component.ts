import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
  }

  ngOnInit() {
  }

}
