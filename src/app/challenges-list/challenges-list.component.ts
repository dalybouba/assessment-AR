import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
  challenges$: Observable<any>;
  constructor(private challengeService: ChallengesService) {
    this.challenges$ = this.challengeService.getChallenges();
  }

  ngOnInit(): void {
  }

}
