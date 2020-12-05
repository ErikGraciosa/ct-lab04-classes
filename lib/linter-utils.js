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

    pop() {
        this.stackArray.pop();
    }

    peekCompare(char) {
        const topOfStack = this.stackArray[this.stackArray.length - 1];
        const parenthesis = topOfStack === '(' && char === ')';
        const curlybraces = topOfStack === '{' && char === '}';
        const brackets = topOfStack === '[' && char === ']';

        const matchingBracketCheck = parenthesis || curlybraces || brackets;

        return matchingBracketCheck;
    }
}

module.exports = {
    Stack, BracketFilter
}
