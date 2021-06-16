import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-preview',
  templateUrl: './joke-preview.component.html',
  styleUrls: ['./joke-preview.component.css'],
})
export class JokePreviewComponent implements OnInit {
  @Output() jokeIdToWatch = new EventEmitter();
  @Input('joke') joke:any;
  @Input('isInModal') isInModal:any;

  constructor() { }

  ngOnInit(): void {

  }

  onOpenJokeModal(joke) {
    this.jokeIdToWatch.emit(joke);
  }

}
