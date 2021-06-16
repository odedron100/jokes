import { Component, OnInit, Input, ViewChild, Output,EventEmitter } from '@angular/core';
import {JokePreviewComponent} from '../joke-preview/joke-preview.component';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements OnInit {
  @Output() jokeIdToWatch = new EventEmitter();
  @ViewChild(JokePreviewComponent ) child : JokePreviewComponent ;
  @Input('jokes') jokes:any;
  @Input('isInModal') isInModal:any;
  constructor() { }

  ngOnInit(): void {

  }

  onOpenJokeModal(joke){
    this.jokeIdToWatch.emit(joke);
  }

}
