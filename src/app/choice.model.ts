export class Choice {
  constructor(
    public text: string, // text to display on choice button
    public sText: string, // text to display on a success
    public sId: string, // id of scenario to nav to on success
    public fText: string, // text to display on fail
    public fId: string // id of scenario to nav to on fail
  ){}
}
