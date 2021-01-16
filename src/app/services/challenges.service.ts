import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_CHALLENGES = gql`
{
  allChallenges{
    edges {
      node {
				title
        teaser
        logo
      }
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
isFavorite: number[]=[];
  constructor(private apollo: Apollo) { }

  getChallenges(): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery({
        query: GET_CHALLENGES,
      })
      .valueChanges
      .pipe(map(result => {
        if (result.data) {
          return (result.data as any).allChallenges.edges;
        }
      }));
  }
  addToFavorite(i: number) {
    this.isFavorite.push(i);
  }
  removeFromFavorite(i: number) {
    let index = this.isFavorite.indexOf(i)
    if (index != -1) {
      this.isFavorite.splice(index, 1);
    }
  }
  checkFavorite(i: number): boolean {
    return this.isFavorite.includes(i)
  }
}
