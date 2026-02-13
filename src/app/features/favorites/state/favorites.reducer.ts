import { createReducer, on } from "@ngrx/store";
import { Character } from "../../characters/models/characters.model";
import { addFavorite, removeFavorite } from "./favorites.actions";

export interface FavoriteState {
    items: Character[];
}

export const initialState: FavoriteState = {
    items: []
};

export const favoritesReducer = createReducer(
    initialState,

    on(addFavorite, (state, { character }) => {
        const exists = state.items.some(c => c.id === character.id);
        if (exists) {
            return state;
        }
        return {
            ...state,
            items: [...state.items, character]
        };
    }),
    on(removeFavorite, (state, { id }) => ({
        ...state,
        items: state.items.filter(s => s.id !== id)
    }))
)