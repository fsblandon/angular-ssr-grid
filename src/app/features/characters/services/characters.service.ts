import { HttpClient } from "@angular/common/http";
import { Injectable, makeStateKey, TransferState } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { ApiResponse, Character } from "../models/characters.model";

@Injectable({ providedIn: 'root'})
export class CharactersService {
    private API_URL = "https://rickandmortyapi.com/api/character";

    constructor(
        private http: HttpClient,
        private transferState: TransferState
    ) {}


    getCharacters(page = 1) {
        const key = makeStateKey<ApiResponse<Character>>(`characters-page-${page}`);

        if (this.transferState.hasKey(key)) {
           const stored = this.transferState.get(key, null as any);
           this.transferState.remove(key);
           return of(stored); 
        }

        return this.http
            .get<ApiResponse<Character>>(`${this.API_URL}?page=${page}`)
            .pipe(
                tap(data => {
                    this.transferState.set(key, data);
                })
            )
    }
}