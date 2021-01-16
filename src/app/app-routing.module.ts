import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';

const routes: Routes = [
  { path:'',component:ChallengesListComponent},
  { path:'selected-item/:id',component:SelectedItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
