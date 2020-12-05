//build a stack class structure FILO
class BracketFilter {
    input;

    constructor(input) {
        this.input = input;
    }

    filterFile() {
        const stringArray = this.input.split('');
        const filteredArray = stringArray.filter(char => 
            char === '(' ||
            char === '{' ||
            char === '[' ||
            char === ')' ||
            char === '}' ||
            char === ']'
        );
        return filteredArray;   
    }
}

class Stack {
    char;

    constructor(char) {
        this.char;
        this.stackArray = [];
    }

    push(char) {
        this.stackArray.push(char);
    }

    smartPop(char) {
        const parenthesis = this.peek() === '(' && char === ')';
        const curlybraces = this.peek() === '{' && char === '}';
        const brackets = this.peek() === '[' && char === ']';
        
        if( parenthesis || curlybraces || brackets ) {
                this.stackArray.pop();
                this.stackArray.pop();
        }
    }

    peek() {
        return this.stackArray[this.stackArray.length - 1 - 1];
    }
}

module.exports = {
    Stack, BracketFilter
}
