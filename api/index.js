import { MongoClient } from 'mongodb';

const express = require('express');
const body = require('body-parser');
const cors = require("cors");

async function start() {
  try {

    const app = express();

    const mongo = await MongoClient.connect('mongodb+srv://TheTobiTiger:1eaec92a17@cluster0.bfpytrt.mongodb.net/test?retryWrites=true&w=majority');

    await mongo.connect();

    app.db = mongo.db();

    // body parser

    app.use(body.json({
      limit: '500kb'
    }));

    app.use(cors());

    // Routes

    app.use('/customers', require('./routes/customers'));

    // Start server

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  }
  catch(error) {
    console.log(error);
  }
}

start();