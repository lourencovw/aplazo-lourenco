import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/models/app-state.model';


interface IData {
  id: string;
  type: 'characters' | 'locations' | 'episodes';
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data = {};

  constructor(private route: ActivatedRoute, private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.getDetails(item))
  }

  getDetails(data: any) {
    const type = data.type.slice(0, -1);
    this.store.select(type).subscribe(item => {
      this.data = item.find((i: any) => String(i.id) === data.id);
    })
  }

}
