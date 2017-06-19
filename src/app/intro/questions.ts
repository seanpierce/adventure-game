import { Question } from '../models/question.model'
import { Answer } from '../models/answer.model'

export var questions = [
  new Question(1, "Who are you?", [new Answer("I'm me. Who else would I be?", 2, -1, -1), new Answer("I'm who I've always been.", -1, 2, -1), new Answer("Can you tell me?", -1, -1, 2)]),

  new Question(2, "Why are you here", [new Answer("How would I know?", 2, -1, -1), new Answer("It feels like a dream.", -1, 2, -1), new Answer("To find meaning.", -1, -1, 2)]),

  new Question(3, "Have you been here before?", [new Answer("No, I only push forward.", 2, -1, -1), new Answer("Still trying to understand what here is.", -1, 2, -1), new Answer("Everything is a cycle.", -1, -1, 2)]),

  new Question(4, "You think back to how you got here. Something was following you. What did you do?", [new Answer("I turned to confront it.", 2, -1, -1), new Answer("I hid from it.", -1, 2, -1), new Answer("I called out to it.", -1, -1, 2)]),

  new Question(5, "Did that work?", [new Answer("Of course, I'm alive aren't I?", 2, -1, -1), new Answer("I don't know.", -1, 2, -1), new Answer("I'm here, so I guess so.", -1, -1, 2)]),

  new Question(6, "Were you afraid?", [new Answer("I'm never afraid.", 2, -1, -1), new Answer("I feel afraid, but I reason my way through it.", -1, 2, -1), new Answer("Fear is helpful. It's part of who I am.", -1, -1, 2)]),

  new Question(7, "Have you been asleep this whole time?", [new Answer("It's too real for that. I'll sleep when I'm dead.", 2, -1, -1), new Answer("It seems likely, but I haven't seen enough to know", -1, 2, -1), new Answer("Whether I am or not I'm conscious.", -1, -1, 2)]),

  new Question(8, "If this were a dream, would you remember it?", [new Answer("I never remember my dreams.", 2, -1, -1), new Answer("The relevant parts.", -1, 2, -1), new Answer("The feeling of a dream stays with you.", -1, -1, 2)]),

  new Question(9, "Can your dreams predict the future?", [new Answer("How is that possible?", 2, -1, -1), new Answer("Possibly, dreams echo what you're thinking.", -1, 2, -1), new Answer("Certainly, dreams and reality build off of each other.", -1, -1, 2)]),
  
  new Question(10, "Everything feels faint. What do you do?", [new Answer("I trudge forward despite it.", 2, -1, -1), new Answer("I take a moment to assess.", -1, 2, -1), new Answer("I call out for help.", -1, -1, 2)])
];
