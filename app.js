const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(port, () => {
    console.log('Initiated')
})