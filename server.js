const express = require('express');
const app = express();
//declarar routers abajo
const gameRouter = require('./src/routes/game')

app.use(express.json());

app.use('/game', gameRouter);


app.listen(8080, () => {
    console.log('app listen at 8080 port');
})