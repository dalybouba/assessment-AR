import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../services/challenges.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {
 
  challenge: any = {};
  id: number;
  constructor(private activatedRouter: ActivatedRoute, private challengesServices: ChallengesService) { }

  ngOnInit(): void {
    this.id = + this.activatedRouter.snapshot.paramMap.get('id');
    this.getItemById();
  }

  getItemById() {
    this.challengesServices.getChallenges().subscribe(
      data => {
        this.challenge = data[this.id]
      }
    );
  }
}
