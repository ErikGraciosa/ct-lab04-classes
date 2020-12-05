const express = require('express');
const app = express();



//write a post endpoint that will return something
//dont use superagent, import the built in fetch to node.

//build a stack class structure FILO

app.post('/api/linter', (req, res) => {
    const linterResult = 'pass!';
    res.send(linterResult);
})

app.listen(7890, () => {
    console.log('started on 7890');
})
