import {combineReducers} from "@ngrx/store";

import { selectedRepo } from "./selectedRepo";
import { repos } from "./repos";

export const rootReducer = combineReducers({
    repos,
    selectedRepo
});