import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Character } from '../../characters/models/characters.model';

@Component({
    selector: 'app-favorite-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <div class="card">
            <img [src]="character.image" [alt]="character.name" />

            <div class="content">
                <h3>{{ character.name }}</h3>
                <p>{{ character.species }} - {{ character.status }}</p>

                <div class="actions">
                    <a [routerLink]="['/characters', character.id]">
                        Ver detalle
                    </a>
                </div>
                <button (click)="remove.emit()">
                    <span>❤️ Quitar de favoritos</span>
                </button>
            </div>
        </div>
    `,
    styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent {
    @Input({ required: true }) character!: Character;
    @Output() remove = new EventEmitter<void>();
}
