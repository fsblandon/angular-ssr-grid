import { ActionReducer, INIT, UPDATE } from "@ngrx/store";

export function localStorageMetaReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return (state, action) => {

        const isBrowser = typeof window !== 'undefined';

        if (isBrowser && (action.type === INIT || action.type === UPDATE)) {
            const storedFavorites = localStorage.getItem('favorites');
            if(storedFavorites) {
                return reducer(
                    {
                        ...state,
                        favorites: JSON.parse(storedFavorites)
                    },
                    action
                );
            }
        }

        const nextState = reducer(state, action);

        if(isBrowser) {
            localStorage.setItem(
                'favorites',
                JSON.stringify(nextState.favorites)
            );
        }

        return nextState;
    };
}