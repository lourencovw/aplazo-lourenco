import { createReducer, on } from '@ngrx/store';
import { ILocation } from 'src/app/models/location.model';
import { addLocations } from '../actions/location.action';

export const initialState: ILocation[] = [
];

export const locationReducer = createReducer(
    initialState,
    on(addLocations, (state, { payload }) => [...state, ...payload])
);