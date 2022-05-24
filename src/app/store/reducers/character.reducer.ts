import { createReducer, on } from '@ngrx/store';
import { ICharacter } from 'src/app/models/character.model';
import { addCharacters } from '../actions/character.action';

export const initialState: ICharacter[] = [
];

export const characterReducer = createReducer(
    initialState,
    on(addCharacters, (state, { payload }) => [...state, ...payload])
);