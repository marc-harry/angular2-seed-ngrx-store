import {ActionReducer, Action} from '@ngrx/store';

import {SELECT_REPO, UPDATE_FULLNAME} from '../actions/selectedRepoActionTypes';

export const selectedRepo: ActionReducer<any> = (state: any = null, action: Action) => {
    switch (action.type) {
        case SELECT_REPO:
            return action.payload;
        case UPDATE_FULLNAME:
            return Object.assign({}, state, {full_name: action.payload});
        default:
            return state;
    }
}