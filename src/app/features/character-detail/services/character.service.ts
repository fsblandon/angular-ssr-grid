import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../../characters/models/characters.model";

@Injectable({ providedIn: 'root'})
export class CharacterService {
    private API_URL = "https://rickandmortyapi.com/api/character";

    constructor(
        private http: HttpClient
    ) {}


    getCharacter(id: string): Observable<Character> {
        return this.http.get<Character>(`${this.API_URL}/${id}`);
    }
}
