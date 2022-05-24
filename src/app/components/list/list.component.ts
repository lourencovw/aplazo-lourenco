import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IAppState } from 'src/app/models/app-state.model';
import { ICharacter } from 'src/app/models/character.model';
import { IEpisode } from 'src/app/models/episode.model';
import { ILocation } from 'src/app/models/location.model';
import { addCharacters } from 'src/app/store/actions/character.action';
import { addEpisodes } from 'src/app/store/actions/episode.action';
import { addLocations } from 'src/app/store/actions/location.action';

type ITypes = 'character' | 'location' | 'episode';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public title: ITypes = 'character';
  character$: Observable<ICharacter[]>;
  episode$: Observable<IEpisode[]>;
  location$: Observable<ILocation[]>;
  result = '';

  constructor(private route: ActivatedRoute, private api: ApiService, private store: Store<IAppState>) {
    this.character$ = store.select('character');
    this.episode$ = store.select('episode');
    this.location$ = store.select('location');
    store.select('search').subscribe(item => this.result = item)
  }

  ngOnInit(): void {
    this.route.data.subscribe((item) => {
      this.title = item['listType']
      this.store.select(this.title).subscribe(item => {
        if (!item.length) {
          this.fetchData(this.title)
        }
      })

    }
    );
  }

  fetchData(title: ITypes) {
    this.api.list(title).subscribe((item) => {
      switch (title) {
        case 'character':
          this.store.dispatch(addCharacters({ payload: item.results }));
          break;
        case 'location':
          this.store.dispatch(addLocations({ payload: item.results }));
          break;
        case 'episode':
          this.store.dispatch(addEpisodes({ payload: item.results }));
          break;
        default:
          break;
      }
    })
  }


}
