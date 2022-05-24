import { createAction, props } from '@ngrx/store';
import { ICharacter } from 'src/app/models/character.model';

export const addCharacters = createAction('[Character] Add', props<{ payload: ICharacter[] }>());