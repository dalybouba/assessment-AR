import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';
import { FavoriteItemComponent } from './favorite-item/favorite-item.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ChallengesListComponent,
    ChallengeComponent,
    SelectedItemComponent,
    FavoriteItemComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
