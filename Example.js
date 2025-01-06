(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "johnMyExtension",
        name: "My Extension",
        blocks: [
          {
            opcode: 'logToConsole',
            text: 'log to console',
            blockType: Scratch.BlockType.COMMAND
          },
          {
            opcode: 'reporter',
            text: 'Reporter',
            blockType: Scratch.BlockType.REPORTER 
          },
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);