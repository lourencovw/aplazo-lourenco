import { createReducer, on } from '@ngrx/store';
import { addSearch } from '../actions/search.action';

export const initialState = '';

export const searchReducer = createReducer(
    initialState,
    on(addSearch, (state, { payload }) => payload)
);