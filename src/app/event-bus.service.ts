import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Feed } from './model/feed';

@Injectable({
    providedIn: 'root'
})
export class EventBusService {
    item: Feed;

    private itemSource = new BehaviorSubject<Feed>(this.item);
    currentItem = this.itemSource.asObservable();

    constructor() {}

    changeItem(item: Feed) {
        this.itemSource.next(item);
    }
}
