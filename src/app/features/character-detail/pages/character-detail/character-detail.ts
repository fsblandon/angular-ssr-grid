import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { Character } from '../../../characters/models/characters.model';
import { selectIsFavorite } from '../../../favorites/state/favorites.selector';
import { addFavorite, removeFavorite } from '../../../favorites/state/favorites.actions';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
  standalone: true
})
export class CharacterDetail {

  character$: Observable<Character>;
  isFavorite$: Observable<boolean>;
  characterId$: Observable<number>;
  vm$: Observable<{
    character: Character;
    isFavorite: boolean;
  }>;
  
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private store: Store
  ) {
    this.characterId$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id')))
    );

    this.character$ = this.characterId$.pipe(
      switchMap(id => this.characterService.getCharacter(id.toString()))
    );

    this.isFavorite$ = this.characterId$.pipe(
      switchMap(id => this.store.select(selectIsFavorite(id)))
    );

    this.vm$ = combineLatest([this.character$, this.isFavorite$]).pipe(
      map(([character, isFavorite]) => ({
        character,
        isFavorite
      }))
    );
  }

  toggleFavorite(character: Character, isFavorite: boolean) {
    if (isFavorite) {
      this.store.dispatch(removeFavorite({ id: character.id }));
    } else {
      this.store.dispatch(addFavorite({ character }));
    }
  }

}
