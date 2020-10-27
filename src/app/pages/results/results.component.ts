import { Observable } from 'rxjs';
import { CraigslistApiService } from './../../services/craiglist-api.service';
import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/interfaces/SearchItem';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  tableElements$: Observable<SearchItem[]>
  constructor(private craigApi: CraigslistApiService) { }
  displayedColumns: string[] = ['price', 'title'];
  ngOnInit(): void {
    this.tableElements$ = this.craigApi.getResults();
  }

}
