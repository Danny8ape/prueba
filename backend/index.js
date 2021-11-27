const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
require('dotenv').config();

const personRoutes = require('./src/routes/person.routes');


app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());



  app.get("/", (req, res) => {
    res.send("Hello");
  });

  app.use('/api', personRoutes);

  app.listen(port, () => console.log(`app listening on port ${port}`));