import { Component, Input, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {
  @Input() i: number;
  constructor(
    private challengesService:ChallengesService
  ) { }

  ngOnInit(): void {

  }

  addToFavorite() {
    this.challengesService.addToFavorite(this.i);
  }

  removeFromFavorite() {
    this.challengesService.removeFromFavorite(this.i);
  }
  
  checkFavorite() {
    return this.challengesService.checkFavorite(this.i);
  }
}
