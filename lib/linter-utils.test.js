const { Stack, BracketFilter } = require("./linter-utils");


describe('Test verifies functionality of the BracketFilter Class', () => {
    it('test will create a class and return an array of only brackets with string input', () => {
      const input = 'adfsoiunr {{{';
      const filteredInput = new BracketFilter(input);
      const output = filteredInput.filterFile();
      expect(output).toEqual(['{', '{', '{']);
    });


    it('test will create a class and return an array of only brackets with string input', () => {
        const input = 'adfsoiunr {[)(]}]{s{dfsf';
        const filteredInput = new BracketFilter(input);
        const output = filteredInput.filterFile();
        expect(output).toEqual(['{', '[', ')', '(', ']', '}', ']','{', '{']);
      });
  });

  describe('Test verifies functionality of the Stack Class', () => {
    it('test will create a class and return an array, input needs to be a BracketFilter Class', () => {
      const emptyStack = new Stack();
      expect(emptyStack.stackArray).toEqual([]);
    });

    it('test will create a class and return an array, input needs to be a BracketFilter Class', () => {
        const testStack = new Stack();
        
        const input = 'adfsoiunr (){}[]df]{{sf';
        const filteredInput = new BracketFilter(input);
        const output = filteredInput.filterFile();
         
        output.forEach(char => {
            testStack.push(char);
            testStack.smartPop(char);
        });
        console.log(testStack.stackArray);
        expect(testStack.stackArray).toEqual([']', '{', '{']);
      });

      it('test will create a class and return an array, input needs to be a BracketFilter Class', () => {
        const testStack = new Stack();
        
        const input = 'adfsoiunr (){}[]df]{{}sf';
        const filteredInput = new BracketFilter(input);
        const output = filteredInput.filterFile();
         
        output.forEach(char => {
            testStack.push(char);
            testStack.smartPop(char);
        });
        console.log(testStack.stackArray);
        expect(testStack.stackArray).toEqual([']', '{']);
      });

      it('test will create a class and return an array, input needs to be a BracketFilter Class', () => {
        const testStack = new Stack();
        
        const input = '{[([[[()]]])]}';
        const filteredInput = new BracketFilter(input);
        const output = filteredInput.filterFile();
         
        output.forEach(char => {
            testStack.push(char);
            testStack.smartPop(char);
        });
        console.log(testStack.stackArray);
        expect(testStack.stackArray).toEqual([]);
      });

      it('test will create a class and return an array, input needs to be a BracketFilter Class', () => {
        const testStack = new Stack();
        
        const input = '[([[[()]]])]}';
        const filteredInput = new BracketFilter(input);
        const output = filteredInput.filterFile();
         
        output.forEach(char => {
            testStack.push(char);
            testStack.smartPop(char);
        });
        console.log(testStack.stackArray);
        expect(testStack.stackArray).toEqual(['}']);
      });

      it('test will create a class and return an array, input needs to be a BracketFilter Class', () => {
        const testStack = new Stack();
        
        const input = '[([[[()]])]}';
        const filteredInput = new BracketFilter(input);
        const output = filteredInput.filterFile();
         
        output.forEach(char => {
            testStack.push(char);
            testStack.smartPop(char);
        });
        console.log(testStack.stackArray);
        expect(testStack.stackArray).toEqual(['[', '(', '[', ')', ']', '}']);
      });


  });
