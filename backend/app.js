const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')
const {schema} = require('./graphQL/schema');
const expressGraphQL = require('express-graphql').graphqlHTTP;
dotenv.config();
const userRouter = require("./router/userRouter")
const jwt = require('./middleware/jwt');
const errorHandler = require('./middleware/errorHandler');

const app = express();

mongoose.connect('mongodb+srv://mario:H70GQjtWuTvrb01Z@cluster0.4o2yk.mongodb.net/tvShows?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Could\'nt connect ro mongodb!'));

app.use(bodyParser.json())
app.use(cors())
app.use(jwt());

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true,
}))

app.use('/api/users',userRouter)
app.use('/',errorHandler);
const PORT = process.env.PORT

// app.listen(5001, () => {
//   console.log("Server started..");
// })
app.listen(process.env.PORT || 5001, ()=>console.log('Now listening...'))