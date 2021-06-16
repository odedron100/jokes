import { Injectable } from '@angular/core';
import {AsyncStorageService} from './async-storage.service';
import {UtilService} from './util.service';
import {JsonJokesComponent} from '../../data/json-jokes/json-jokes.component';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
    JOKES_KEY = 'jokes';
    storageService;
    utilService;
    jokeJson;
    constructor() {
        let service = new AsyncStorageService;
        this.storageService = service;
        let newUtilService = new UtilService;
        this.utilService = newUtilService;
        let json = new JsonJokesComponent;
        this.jokeJson = json;
    }


    sort(arr) {
        return arr.sort((a, b) => {
            const sentenceA = a.joke ? a.joke : a.setup;
            const sentenceB = b.joke ? b.joke : b.setup;
            if (sentenceA.toLocaleLowerCase() < sentenceB.toLocaleLowerCase()) {
            return -1;
            }
            if (sentenceA.toLocaleLowerCase() > sentenceB.toLocaleLowerCase()) {
            return 1;
            }
            return 0;
        })
    }

    query(filterBy = null){
        return new Promise((resolve, reject) => {
            let jokesToReturn = this.utilService.loadFromStorage(this.JOKES_KEY);
            if (!jokesToReturn || !jokesToReturn.length) {
                jokesToReturn = this.jokeJson.getJokes();
            }
            this.utilService.saveToStorage(this.JOKES_KEY, jokesToReturn);
            if (filterBy) {
                jokesToReturn = this.getFilter(filterBy)
            }
            resolve(this.sort(jokesToReturn))
        })
    }

    getById(id) {
        return this.storageService.get(this.JOKES_KEY, id)
    }

    remove(id) {
        return this.storageService.remove(this.JOKES_KEY, id)
    }

    save(toy) {
        const updateJoke = toy._id ? this.storageService.put(this.JOKES_KEY, toy) : this.storageService.post(this.JOKES_KEY, toy)
        return updateJoke;
    }

    // getEmptyJoke(name = '',) {
    //     return {
    //         _id:'',
    //         title:'',
    //         price:0
    //     };
    // }

    getFilter(term) {
        term = term.toLocaleLowerCase()
        const jokes =JSON.parse(localStorage.getItem(this.JOKES_KEY));
        return jokes.filter(joke => {
            const sentence = joke.joke ? joke.joke : joke.setup;
            return sentence.toLocaleLowerCase().includes(term);
        })
    }

}
