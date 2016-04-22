import {Reducer, Action} from '@ngrx/store';

import {SELECT_REPO, UPDATE_FULLNAME} from '../constants/selectedRepoActionTypes';

export const selectedRepo: Reducer<any> = (state: any = null, action: Action) => {
    switch (action.type) {
        case SELECT_REPO:
            return action.payload;
        case UPDATE_FULLNAME:
            return Object.assign({}, state, {full_name: action.payload});
        default:
            return state;
    }
}