import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';


interface IListType {
  listType: string;
}
const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    data: <IListType>{ listType: 'character' },
    component: ListComponent
  },
  {
    path: 'locations',
    data: <IListType>{ listType: 'location' },
    component: ListComponent
  },
  {
    path: 'episodes',
    data: <IListType>{ listType: 'episode' },
    component: ListComponent
  },
  {
    path: ':type/details/:id',
    loadChildren: () => import('./components/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
