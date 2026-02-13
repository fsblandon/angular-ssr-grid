import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteState } from "./favorites.reducer";

export const selectFavoritesState = createFeatureSelector<FavoriteState>('favorites');

export const selectFavorites = createSelector(
    selectFavoritesState,
    state => state.items
);

export const selectIsFavorite = (id: number) =>
    createSelector(
        selectFavorites,
        items => items.some(c => c.id === id)
    );