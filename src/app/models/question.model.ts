import { Answer } from './answer.model';

export class Question {
  constructor(
    public id: number,
    public question: string,
    public answers: Answer[]
  ) {
    this.shuffle(answers);
  }
  shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
  }
}
