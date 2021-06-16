import { Component, Input, OnInit, Output,EventEmitter,ViewChild } from '@angular/core';
import {UtilService} from '../services/util.service'
import {JokeListComponent} from '../joke-list/joke-list.component';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.css'],
})
export class JokeModalComponent implements OnInit {
  @Output() jokeIdToWatch = new EventEmitter();
  @ViewChild(JokeListComponent ) child : JokeListComponent ;
  @Output() closeJoke = new EventEmitter();
  @Input('activeJoke') activeJoke:any;
  @Input('jokes') jokes:any;
  utilService;
  suggestedJokes = null;
  constructor() {
    let service = new UtilService;
    this.utilService = service;
  }

  ngOnInit(): void {
    this.getRandomJokes()
  }

  onCloseJokeModal() {
    this.closeJoke.emit();
  }

  onOpenJokeModal(joke){
    this.jokeIdToWatch.emit(joke);
  }

  getRandomJokes(){
    const jokesFromSameType = this.jokes.filter(joke => {
      return joke.type === this.activeJoke.type;
    })
    const randomNum1 = this.utilService.getRandomInt(0,jokesFromSameType.length);
    const randomNum2 = this.utilService.getRandomInt(0,jokesFromSameType.length);
    const randomNum3 = this.utilService.getRandomInt(0,jokesFromSameType.length);

    this.suggestedJokes = [jokesFromSameType[randomNum1],jokesFromSameType[randomNum2],jokesFromSameType[randomNum3]]
  }

}
