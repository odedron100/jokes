import { Injectable } from '@angular/core';
import {AsyncStorageService} from './async-storage.service';
import {UtilService} from './util.service';
import {JsonJokesComponent} from '../../data/json-jokes/json-jokes.component';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
    JOKES_KEY = 'jokes';
    storageService;
    utilService;
    toyJson;
    constructor() {
        let service = new AsyncStorageService;
        this.storageService = service;
        let newUtilService = new UtilService;
        this.utilService = newUtilService;
        let json = new JsonJokesComponent;
        this.toyJson = json;
    }


    setFilter(filterBy) {
        // gFilterBy = filterBy;
    }

    query() {
        if (localStorage.getItem(this.JOKES_KEY)) return this.storageService.query(this.JOKES_KEY);
        else {
            localStorage.setItem(this.JOKES_KEY, JSON.stringify(this.toyJson.getToys()));
            const jokes = localStorage.getItem(this.JOKES_KEY)
            return Promise.resolve(jokes);
        }

    }

    getById(id) {
        return this.storageService.get(this.JOKES_KEY, id)
    }

    remove(id) {
        return this.storageService.remove(this.JOKES_KEY, id)
    }

    save(toy) {
        const updateJoke = toy._id ? this.storageService.put(this.JOKES_KEY, toy) : this.storageService.post(this.JOKES_KEY, toy)
        console.log('updateJoke', updateJoke);
        return updateJoke;
    }

    getEmptyToy(name = '',) {
        return {
            _id:'',
            title:'',
            price:0
        };
    }

}
