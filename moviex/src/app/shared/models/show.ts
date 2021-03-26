export type Show = {
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
        type: any,
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
}