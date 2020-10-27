import { SearchItem } from './../../interfaces/SearchItem';
import { CraigslistApiService } from './../../services/craiglist-api.service';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent, Observable, Subject } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
  takeUntil
} from "rxjs/operators";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchBarComponent implements OnInit, AfterViewInit, OnDestroy {
  userRequest: string;
  loading: boolean;
  queryResponse$: Observable<SearchItem[]>;
  @Output() responseReceived = new EventEmitter<any>();
  @ViewChild("searchInput", { static: true }) input: ElementRef;
  private ngUnsubscribe = new Subject();
  inputLength = 0;
  
  constructor(private craigApi: CraigslistApiService) { }
  required = new FormControl('', [Validators.required, Validators.minLength(2)]);

  ngOnInit(): void {
    this.loading = false;
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, "keyup")
      .pipe(
        tap(() => {
          this.inputLength = this.input.nativeElement.value.length;
          if(this.input.nativeElement.value.length < 2) return
          this.loading = true;
        }),
        takeUntil(this.ngUnsubscribe),
        filter(Boolean),
        debounceTime(1500),
        distinctUntilChanged(),
        tap(() => {
          if(this.input.nativeElement.value.length < 2) return
          this.craigApi.processInput(this.input.nativeElement.value)
          this.queryResponse$ = this.craigApi.getResults();
        })
      )
      .subscribe(_ => this.loading = false);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

  callApi(input) {
    this.craigApi.processInput(input);
    this.responseReceived.emit(this.queryResponse$);
  }

  showResults() {
    console.log('test')
  }

}
