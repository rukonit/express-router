const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');

app.use('/shelters', shelterRoutes);

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING AT PORT 3000");
})