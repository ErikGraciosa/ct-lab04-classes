//build a stack class structure FILO
class BracketLinter {
    input;

    constructor(input) {
        this.input = input;
    }

    lintFile() {
        //Split the input to make the array.
        //Filter out only brackets 
        //Build a stack using an array and push and pop to the array on condition of being a bracket.
        console.log(this.input);
        const stringArray = this.input.split('');

        const filteredArray = stringArray.filter(char => 
            char === '(' ||
            char === '{' ||
            char === '[' ||
            char === ')' ||
            char === '}' ||
            char === ']'
        )
        console.log(filteredArray);    

    }


    //future refactor
    inputToString() {
        
    }

    
    //future refactor
    filterToBrackets() {

    }

}

const tester = new BracketLinter('her{{(})90]9]9]0})})})})es a bunch of input');
tester.lintFile();
