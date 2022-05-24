import { createReducer, on } from '@ngrx/store';
import { IEpisode } from 'src/app/models/episode.model';
import { addEpisodes } from '../actions/episode.action';

export const initialState: IEpisode[] = [
];

export const episodeReducer = createReducer(
    initialState,
    on(addEpisodes, (state, { payload }) => [...state, ...payload])
);