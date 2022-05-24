import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './store/reducers/character.reducer';
import { locationReducer } from './store/reducers/location.reducer';
import { episodeReducer } from './store/reducers/episode.reducer';
import { FilterPipe } from './filter.pipe';
import { searchReducer } from './store/reducers/search.reducer';
import { DetailModule } from './components/detail/detail.module';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      character: characterReducer,
      location: locationReducer,
      episode: episodeReducer,
      search: searchReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
