const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {schema} = require('./graphQL/schema');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

mongoose.connect('mongodb+srv://mario:H70GQjtWuTvrb01Z@cluster0.4o2yk.mongodb.net/tvShows?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json())
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true,
}))

app.listen(5001, () => {
  console.log("Server started..");
})