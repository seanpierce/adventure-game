import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Scene } from '../models/scene.model';
import { paper } from 'paper';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GameService]
})

export class MapComponent implements OnInit {
  scenes = [];
  players = [];
  startId: string = '-KnBWQwKt4XglDi0tdcy';
  bars = [];
  elements = [];

  constructor(private gameService: GameService){}

  ngOnInit(){
    paper.install(window);
    paper.setup(document.getElementById(`canvas`))
    this.gameService.allScenes().subscribe(data => {
      this.scenes = data;
      this.gameService.allCharacters().subscribe(data => {
        this.players = data;
        this.startMap();
      });
    });
  }

  startMap(){
    this.barify();
    paper.view.draw();
  }

  barify(){
    let arr = [];
    for(let i = 0; i < this.scenes.length; i++){
        arr.push(0);
    }

    this.elements.forEach( bar=> {
      bar.remove();
    });

    this.players.forEach( p => {
      let i = this.scenes.findIndex( s => {
        return s.$key === p.currentScene;
      });
      if(i >= 0) { arr[i]+=1; }
    });

    let segments = [];
    segments.push([0,0]);
    let barWidth = paper.view.bounds.height/this.scenes.length;
    this.scenes.forEach((scene, i) => {
      let p = new paper.Point(0, barWidth * i);
      let c = new paper.Shape.Circle(new paper.Point((arr[i]+1)*10, (barWidth * i+(barWidth/2))), 2);
      c.setFillColor('white');
      segments.push([(arr[i]+1)*10,(barWidth * i+(barWidth/2))])
      let t = new paper.PointText(arr[i]*10+20,p.y+barWidth/1.7);
      t.setFillColor('white');
      t.setContent(scene.title);
      this.elements.push(t);
    });

    segments.push([0,paper.view.bounds.height]);
    let path = new paper.Path({
      segments: segments
    });
    
    path.setStrokeColor('white');
    path.setFillColor('white');
    this.elements.push(path);
  }
}
