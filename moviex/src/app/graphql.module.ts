import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {environment} from '../environments/environment'


const uriLocal = 'http://localhost:8000/graphql'; // local version
const uriProduction = 'https://moviex-graphql.herokuapp.com/graphql';
let uri;
if (environment.production) {
 uri = uriProduction;
}
else{
  uri = uriLocal;
}
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return{
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  }
  // return {
  //   link: httpLink.create({uri}),
  //   cache: new InMemoryCache(),
  // };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
