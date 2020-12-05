const express = require('express');
const app = express();



app.use(express.json());

app.post('/api/linter', (req, res) => {
    
    res.send('hi');
})

app.listen(7890, () => {
    console.log('started on 7890');
})
