const Show = require('../models/show')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat
} = require('graphql')


const scheduleType = new GraphQLObjectType({
  name: 'Schedule',
  description: 'a show\'s schedule',
  fields: () => ({
    time: {type: GraphQLNonNull(GraphQLString)},
    days: {type: GraphQLList(GraphQLString)}
  })
})

const ratingType = new GraphQLObjectType({
  name: 'Rating',
  description: 'a show\'s rating',
  fields: () => ({
    average: {type: (GraphQLFloat)}
  })
})

const countryType = new GraphQLObjectType({
  name: 'Country',
  description: 'a show\'s country',
  fields: () => ({
    name: {type: GraphQLNonNull(GraphQLString)},
    code: {type: GraphQLNonNull(GraphQLString)},
    timezone: {type: GraphQLNonNull(GraphQLString)}
  })
})

const networkType = new GraphQLObjectType({
  name: 'Network',
  description: 'a show\'s network',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    country: {type: GraphQLNonNull(countryType)}
  })
})

const externalsType = new GraphQLObjectType({
  name: 'Externals',
  description: 'a show\'s externals',
  fields: () => ({
    tvrage: {type: GraphQLInt},
    thetvdb: {type: GraphQLInt},
    imdb: {type: GraphQLString}
  })
})

const imageType = new GraphQLObjectType({
  name: 'Image',
  description: 'a show\'s image',
  fields: () => ({
    medium: {type: GraphQLString},
    original: {type: GraphQLString}
  })
})

const linkType = new GraphQLObjectType({
  name: 'link',
  fields: () => ({
    href: {type: GraphQLString}
  })
})

const linksType = new GraphQLObjectType({
  name: 'links',
  description: 'a show\'s links',
  fields: () => ({
    self: {type: (linkType)},
    previousepisode: {type: (linkType)},
    nextepisode: {type: (linkType)}
  })
})

const showType = new GraphQLObjectType({
  name: 'Show',
  description: 'Just a show',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    url: {type: GraphQLNonNull(GraphQLString)},
    type: {type: GraphQLNonNull(GraphQLString)},
    language: {type: GraphQLNonNull(GraphQLString)},
    genres: {type: GraphQLList(GraphQLString)},
    status: {type: GraphQLNonNull(GraphQLString)},
    runtime: {type: GraphQLNonNull(GraphQLInt)},
    premiered: {type: GraphQLNonNull(GraphQLString)},
    officialSite: {type: (GraphQLString)},
    schedule: {type: GraphQLNonNull(scheduleType)},
    rating: {type: GraphQLNonNull(ratingType)},
    weight: {type: GraphQLNonNull(GraphQLInt)},
    network: {type: (networkType)},
    externals: {type: (externalsType)},
    image: {type: (imageType)},
    summary: {type: GraphQLNonNull(GraphQLString)},
    updated: {type: GraphQLNonNull(GraphQLInt)},
    _links: {type: (linksType)}
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    shows: { // get ALL shows
      type: new GraphQLList(showType),
      description: '',

      resolve: () => {
        return Show.find({}).then(data => {
          return (data)
        }).catch(err => {
          throw err
        });
      }
    },
    show: { // Get show by name
      type: showType,
      name: 'A show',
      args: {name: {type: GraphQLString}},

      resolve: (parent, args) => {
        return Show.findOne({name: args.name}).then(data => {
          return data
        }).catch(err => {
          throw err
        });
      }
      // EXAMPLE: 
      // show(name:"Penny Dreadful"){
      //   url
      //   rating{
      //     average
      //   }
      // }
    }
  })
})

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addShow: {
      type: showType,
      description: "Add a new show",
      args: {
        id: {type: GraphQLInt},
        name: {type: GraphQLNonNull(GraphQLString)},
        url: {type: GraphQLString},
        type: {type: GraphQLString},
        language: {type: GraphQLString},
        genres: {type: GraphQLList(GraphQLString)},
        status: {type: GraphQLString},
        runtime: {type: GraphQLInt},
        premiered: {type: GraphQLString},
        officialSite: {type: (GraphQLString)},
        weight: {type: GraphQLInt},
        summary: {type: GraphQLNonNull(GraphQLString)},
        updated: {type: GraphQLInt},
      },
      resolve: (parent, args) => {
        let newShow = new Show({
          id: args.id,
          name: args.name,
          url: args.url,
          type: args.type,
          language: args.language,
          genres: args.genres,
          status: args.status,
          runtime: args.runtime,
          premiered: args.premiered,
          officialSite: args.officialSite,
          weight: args.weight,
          summary: args.summary,
          updated: args.updated,
        })
        return newShow.save()
      } 
    }
  })
  // EXAMPLE
  // mutation{
  //   addShow(name: "test", summary: "test summary"){
  //     name,
  //   }
  // }
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

exports.schema = schema;