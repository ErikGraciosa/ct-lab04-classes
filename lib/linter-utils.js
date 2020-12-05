//build a stack class structure FILO
class BracketFilter {
    input;

    constructor(input) {
        this.input = input;
    }

    filterFile() {
        //Split the input to make the array.
        //Filter out only brackets 
        //Build a stack using an array and push and pop to the array on condition of being a bracket.
        const stringArray = this.input.split('');
        const filteredArray = stringArray.filter(char => 
            char === '(' ||
            char === '{' ||
            char === '[' ||
            char === ')' ||
            char === '}' ||
            char === ']'
        )
        
        return filteredArray;   
    }

    //future refactor
    inputToString() {

    }
    
    //future refactor
    filterToBrackets() {

    }
}

class Stack {
    char;

    constructor(char) {
        this.char;
        this.stackArray = [];
    }

    //put item on top of stack
    push(char) {
        this.stackArray.push(char);
    }

    //take item off the top of the stack
    smartPop(char) {
        console.log(this.peek() + 'this is char:' + char);
        const parenthesis = this.peek() === '(' && char === ')';
        const curlybraces = this.peek() === '{' && char === '}';
        const brackets = this.peek() === '[' && char === ']';
        console.log(`() ${parenthesis}, {} ${curlybraces}, [] ${brackets}`);
        if( parenthesis || curlybraces || brackets ) {
                this.stackArray.pop();
                this.stackArray.pop();
        }
    }

    //look at item on top of the stack
    peek() {
        return this.stackArray[this.stackArray.length - 1 - 1];
    }
}

module.exports = {
    Stack, BracketFilter
}
