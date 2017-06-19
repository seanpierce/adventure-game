import { Answer } from './answer.model';

export class Question {
  constructor(
    public id: number,
    public question: string,
    public answers: Answer[]
  ) { }
}
