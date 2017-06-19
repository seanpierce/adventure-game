import { Scenario } from './scenario.model';
import { Choice } from './choice.model';

export const DB = {
  // character: [],
  choice: [
  // constructor: Choice(id, text, sText, sId, fText, fId)
    new Choice("0", "take a risk, grind that halfpipe", "you grind it so good", "1", "you hit your head and lose all your cred", "0"),
    new Choice("1", "go to the store", "success", "1", "failure", "0")
  ],
  scenario: [
    new Scenario("0","THIS IS A FAIL, DAD YOU ARE SAD"),
    new Scenario("1","THIS IS A PASS, DAD YOU DID IT!"),
    new Scenario("2","THIS IS A SCENARIO, YOU ARE IN IT. DAD")
  ]
}
