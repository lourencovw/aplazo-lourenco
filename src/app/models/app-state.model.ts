import { ICharacter } from './character.model';
import { IEpisode } from './episode.model';
import { ILocation } from './location.model';

export interface IAppState {
    character: ICharacter[];
    location: ILocation[];
    episode: IEpisode[];
    search: string;
}