import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public title: string = '';
  public data: any[] = [];
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.route.data.subscribe((item) => {
      this.title = item['listType']
      this.api.list(item['listType']).subscribe((item) => this.data = item.results)
    }
    );

  }

}
