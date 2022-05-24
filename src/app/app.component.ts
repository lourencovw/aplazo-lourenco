import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './models/app-state.model';
import { addSearch } from './store/actions/search.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aplazo';

  constructor(private store: Store<IAppState>) {
  }

  search(event: any) {
    this.store.dispatch(addSearch({ payload: event.target.value }))
  }
}
