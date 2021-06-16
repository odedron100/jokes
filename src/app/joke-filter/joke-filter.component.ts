import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.css'],
})
export class JokeFilterComponent implements OnInit {
  @Output() jokesAfterFilter = new EventEmitter();
  jokesToSearch = '';
  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(jokesToSearch) {
    this.jokesAfterFilter.emit(jokesToSearch);
  }
}
