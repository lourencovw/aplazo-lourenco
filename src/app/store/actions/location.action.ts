import { createAction, props } from '@ngrx/store';
import { ILocation } from 'src/app/models/location.model';

export const addLocations = createAction('[Location] Add', props<{ payload: ILocation[] }>());