import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Character } from '../models/characters.model';

@Component({
    selector: 'app-character-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <div class="card">
        <img [src]="character.image" [alt]="character.name" />
        <div class="content">
            <h3>{{ character.name }}</h3>
            <p>{{ character.species }} - {{ character.status }}</p>
            <a [routerLink]="['/characters', character.id]">
                Ver detalle
            </a>
        </div>
        </div>
    `,
    styleUrls: ['./character-card.component.scss']
})

export class CharacterCardComponent {
    @Input({ required: true }) character!: Character;
}
