import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {JokeService} from '../services/joke.service'
import {JokeListComponent} from '../joke-list/joke-list.component';
import {JokeModalComponent} from '../joke-modal/joke-modal.component';
import {JokeFilterComponent} from '../joke-filter/joke-filter.component';

@Component({
  selector: 'app-joke-app',
  templateUrl: './joke-app.component.html',
  styleUrls: ['./joke-app.component.css'],
})
export class JokeAppComponent implements OnInit {
  @ViewChild(JokeListComponent ) child : JokeListComponent ;
  @ViewChild(JokeModalComponent ) child2 : JokeModalComponent ;
  @ViewChild(JokeFilterComponent ) child3 : JokeModalComponent ;
  jokeService;
  jokes = null;
  activeJoke = null;
  filterBy = '';
  constructor(private router:Router) {
    let service = new JokeService;
    this.jokeService = service;
  }
  ngOnInit(): void {
    this.loadJokes()
}

  async loadJokes(){
    const newJokes = await this.jokeService.query(this.filterBy)
    this.jokes = newJokes;
  }

  onFilter(filter){
    this.filterBy = filter;
    this.loadJokes()
  }

  async openJokeModal(joke){
    this.activeJoke = joke;
  }

  closeJokeModal(){
    this.activeJoke = null;
  }

}
