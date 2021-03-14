const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSch = new Schema({
  // id: {   //Should be provided automatically
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  url: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    unique: true
    // required: true
  },
  type: {
    type: String,
    // required: true
  },
  language: {
    type: String,
    // required: true
  },
  genres: {
    type: Array,
    // required: true
  },
  status: {
    type: String,
    // required: true
  },
  runtime: {
    type: Number,
    // required: true
  },
  premiered: {
    type: String
  },
  officialSite: {
    type: String
  },
  schedule: {
    type: Object
  },
  rating: {
    type: Object
  },
  weight: {
    type: Number
  },
  network: {
    type: Object
  },
  webChannel: {
    type: String
  },
  externals: {
    type: Object
  },
  image: {
    type: Object
  },
  summary: {
    type: String
  },
  updated: {
    type: Object
  },
  _links: {
    type: Object
  }
},{
collection: 'shows'
}
)

module.exports = mongoose.model('shows', showSch);