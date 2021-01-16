import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() challenge: any;
  @Input() i: number;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  goToSelectedItem() {
    this.router.navigate([`selected-item/${this.i}`]);
  }
}
