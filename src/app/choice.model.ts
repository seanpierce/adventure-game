export class Choice {
  constructor(
    public id: string,
    public text: string, // text to display on choice button
    public sText: string, // text to display on a success
    public sId: string, // id of scene to nav to on success
    public fText: string, // text to display on fail
    public fId: string // id of scene to nav to on fail
  ){}
}
