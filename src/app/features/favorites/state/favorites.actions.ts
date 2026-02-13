import { createAction, props } from "@ngrx/store";
import { Character } from "../../characters/models/characters.model";

export const addFavorite = createAction(
    '[Favorite] Add',
    props<{ character: Character }>()
);

export const removeFavorite = createAction(
    '[Remove] Delete',
    props<{ id: number }>()
);