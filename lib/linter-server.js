const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/linter', (req, res) => {
    const linterResult = `you sent me ${req.body.red}`;
    console.log(req.body);
    res.send(linterResult);
})

app.listen(7890, () => {
    console.log('started on 7890');
})
