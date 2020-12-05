const express = require('express');
const app = express();
const { Stack, BracketFilter } = require("./linter-utils");


app.use(express.text());

app.post('/api/linter', (req, res) => {
    const testStack = new Stack();
        
    const input = req.body;
    const filteredInput = new BracketFilter(input);
    const output = filteredInput.filterFile();
         
    output.forEach(char => {
        testStack.push(char);
        testStack.smartPop(char);
    });

    const textResponse = testStack.stackArray.length ? 'Linter failed! Found open brackets.' : 'Linter is passing, brackets are paired.';
    
    res.send(textResponse);
})

app.listen(7890, () => {
    console.log('started on 7890');
})
