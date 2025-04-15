import { EventBusService } from './../event-bus.service';
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
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.eventBusService.currentItem.subscribe(contents => {
      this.contents = contents;
    });
  }
}
