export class Character {
  constructor(
    public name: string,
    public strength: number,
    public intelligence: number,
    public charisma: number,
    public currentScene: string,
    public failCount: number
  ) { }
}
