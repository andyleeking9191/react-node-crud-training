const express = require('express');
const app = express();
const port = 3001;

app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}...`)
})