import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
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
  //isFavorite: number[]=[];
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
  // addToFavorite(i: number) {
  //   this.isFavorite.push(i);
  // }
  // removeFromFavorite(i: number) {
  //   let index = this.isFavorite.indexOf(i)
  //   if (index != -1) {
  //     this.isFavorite.splice(index, 1);
  //   }
  // }

   isFavorite = new BehaviorSubject<number[]>([]);
 
 
  addToFavorite(data: number) {
    this.isFavorite.next(this.isFavorite.getValue().concat([data]));
    console.log(this.isFavorite)
  }
  removeFromFavorite(data: number) {
    const i = this.isFavorite.getValue().indexOf(data);
    if (i != -1) {
      this.isFavorite.getValue().splice(i,1);
    }
  }
  checkFavorite(i: number){
    //return this.isFavorite.getValue().includes(i);
    let res:boolean;
     this.isFavorite.subscribe(
      data=>{
        res=data.includes(i)
      }
    );
    return res ;
  }

}
