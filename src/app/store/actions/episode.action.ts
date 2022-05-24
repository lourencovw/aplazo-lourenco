import { createAction, props } from '@ngrx/store';
import { IEpisode } from 'src/app/models/episode.model';

export const addEpisodes = createAction('[Episode] Add', props<{ payload: IEpisode[] }>());