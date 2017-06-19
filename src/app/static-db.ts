import { Scene } from './scene.model';

export const DB = {
  // character: [],
  scene: [
    new Scene("0","Graveyard Intro",  "You arrive in a quiet field. Across a small creek lies a rusted iron gate. Behind it rows upon rows of ancient tombstones."),
    new Scene("1", "Graveyard Gate", "The gate creeks as you push it aside. Sunset is fading quickly as you enter the graveyard. You begin to feel a chill"),
    new Scene("2", "Creek bed", "On second thought, the graveyard sounds like a super bad idea. You follow the creek downstream. Walking into the sunset, with the graveyard at your back, the world feels a little brighter")
  ]
};
