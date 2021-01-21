import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() challenge: any;
  @Input() i: number;
  constructor(private router: Router,private challengesService:ChallengesService) { }
  ngOnInit(): void {
  }
  goToSelectedItem() {
    this.router.navigate([`selected-item/${this.i}`]);
  }
  // checkFavorite() {
  //   return this.challengesService.checkFavorite(this.i);
  // }

}
