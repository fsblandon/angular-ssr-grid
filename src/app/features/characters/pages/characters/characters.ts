import { Component, computed, signal } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CharacterCardComponent } from '../../components/character-card.component';

@Component({
  selector: 'app-characters',
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
  standalone: true,
})
export class Characters {
  
  constructor(
    private charactersService: CharactersService
  ) {}

  page = signal(1);
  response = toSignal(
    toObservable(this.page).pipe(
      switchMap(page => this.charactersService.getCharacters(page))
    ),
    { initialValue: null }
  );

  characters = computed(() => this.response()?.results ?? []);
  hasNext = computed(() => !!this.response()?.info.next);
  hasPrev = computed(() => !!this.response()?.info.prev);

  nextPage() {
    if(this.hasNext()) this.page.update(p => p + 1);
  }

  prevPage() {
    if(this.hasPrev()) this.page.update(p => p - 1);
  }
}
