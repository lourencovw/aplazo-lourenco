import { createAction, props } from '@ngrx/store';

export const addSearch = createAction('[Search] Add', props<{ payload: string }>());