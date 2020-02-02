import { EventBusService } from './../event-bus.service';
import { FeedService } from './../feed.service';
import { Feed } from './../model/feed';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contents: Feed;

  constructor(
    private feedService: FeedService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.eventBusService.currentItem.subscribe(contents => {
      this.contents = contents;
    });
  }

}
