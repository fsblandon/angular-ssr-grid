import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../state/favorites.selector';
import { removeFavorite } from '../../state/favorites.actions';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../../../characters/models/characters.model';
import { FavoriteCardComponent } from '../../components/favorite-card.component';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, RouterModule, FavoriteCardComponent],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {

  favorites$: Observable<Character[]>;

  constructor(private store: Store) {
    this.favorites$ = this.store.select(selectFavorites);
  }

  remove(id: number) {
    this.store.dispatch(removeFavorite( {id} ));
  }
}
