//build a stack class structure FILO
class BracketLinter {
    input;

    constructor(input) {
        this.input = input;
    }

    lintFile() {
        console.log('This is where the file is linted')
    }
}

const tester = new BracketLinter('input');
tester.lintFile();
