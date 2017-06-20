import { Scene } from './models/scene.model';

export const DB = {
  // character: [],
  scenes: [
    new Scene("Graveyard Intro",  "You arrive in a quiet field. Across a small creek lies a rusted iron gate. Behind it rows upon rows of ancient tombstones."),
    new Scene ("Graveyard Gate", "The gate creeks as you push it aside. Sunset is fading quickly as you enter the graveyard. You begin to feel a chill"),
    new Scene("Creek bed", "On second thought, the graveyard sounds like a super bad idea. You follow the creek downstream. Walking into the sunset, with the graveyard at your back, the world feels a little brighter")
  ]
};
