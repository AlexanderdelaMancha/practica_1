const express = require('express');
const app = express();

const route1 = require('./routes/route1');
const route2 = require('./routes/route2');
const route3 = require('./routes/route3');

app.use(route1);
app.use(route2);
app.use(route3);

const PORT = 3000; // Asegúrate de que este puerto es el que estás visitando
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


