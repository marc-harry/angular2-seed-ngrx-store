import {ActionReducer, Action} from '@ngrx/store';

import {ADD_ITEMS, REMOVE_ALL_ITEMS} from '../constants/repoActionTypes';

export const repos: ActionReducer<Array<any>> = (state: Array<any> = [], action: Action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return action.payload;
        case REMOVE_ALL_ITEMS:
            return [];
        default:
            return state;
    }
}