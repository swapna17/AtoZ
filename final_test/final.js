

// Based on https://github.com/alexa/skill-sample-nodejs-fact

let Alexa = require('alexa-sdk');
var tracery = require('tracery-grammar');



grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));

// replace with your app ID (OPTIONAL).
// let APP_ID = undefined;

let SKILL_NAME = 'I know you.';
let GET_ANSWER = 'Here\'s your answer: ';
let HELP_MESSAGE = 'You can ask me anything ... What can I help you with?';
let HELP_REPROMPT = 'What can I help you with?';
let STOP_MESSAGE = 'Goodbye! Long Live the digital assistants';

let handlers = {
  'LaunchRequest': function() {
    this.emit(':ask', 'Hey there! How are you? What would you like to know?');
  },



  'QuestiononeIntent': function() {
    this.emit(':ask','Playing your latest favourite song which you shared with your childhood bestie. You hated it as a kid but now you have developed a different taste.');
  },

  'QuestiontwoIntent': function() {
    this.emit(':ask', 'You are one lazy fat ass that\'s what your boyfriend said. You did nothing.');
  },

  'QuestionthreeIntent': function() {
    this.emit(':ask', 'Are you sure? I heard you bitch about him yesterday. you also said you don\'t wish to talk to him ever.');
  },

  'QuestionfourIntent': function() {
    this.emit(':ask', var grammar = tracery.createGrammar({
    'action': ['helped','hid','stumbled','got carried away'],
    'emotion': ['kind','weird','lonely','jealous'],
    'noun': ['disappointment','misunderstanding','tragedy'],
    'origin':
    ['Once upon a time there was a girl named Swapna. She was very #emotion#. She did #action# and #action#. It led to a huge"noun"'],

  }););
   },







  'AMAZON.HelpIntent': function() {
    let speechOutput = HELP_MESSAGE;
    let reprompt = HELP_MESSAGE;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function() {
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function() {
    this.emit(':tell', STOP_MESSAGE);
  }
};

exports.handler = function(event, context) {
  let alexa = Alexa.handler(event, context);
  // alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
