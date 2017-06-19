import { Scenario } from './scenario.model';
import { Choice } from './choice.model';

export const DB = {
  // character: [],
  choice: [
  // constructor: Choice(text, sText, sId, fText, fId)
    new Choice("take a risk, grind that halfpipe", "you grind it so good", "1", "you hit your head and lose all your cred", "0"),
    new Choice("go to the store", "success", "0", "failure", "1")
  ],
  scenario: [
    new Scenario("THIS IS A SCENARIO, YOU ARE IN IT. DAD"),
    new Scenario("THIS IS A SCENARIO, YOU ARE IN IT. DAD2.0")
  ]
}
