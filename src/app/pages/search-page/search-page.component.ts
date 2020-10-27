import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/interfaces/SearchItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  queryResponse$: Observable<SearchItem[]>
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  onResponseReceived(queryResponse$: Observable<SearchItem[]>) {
    this.router.navigate(['/results']);
  }

}
