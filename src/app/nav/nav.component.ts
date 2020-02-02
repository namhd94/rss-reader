import { FeedService } from './../feed.service';
import { EventBusService } from './../event-bus.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  news = [
    {name: 'VnExpress', active: true, link: 'https://vnexpress.net/rss/tin-moi-nhat.rss'},
    {name: 'Vietnamnet', active: false, link: 'https://vietnamnet.vn/rss/tin-moi-nong.rss'},
    {name: 'Tuoitre', active: false, link: 'https://tuoitre.vn/rss/tin-moi-nhat.rss'}
  ];

  constructor(
    private eventBusService: EventBusService,
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.getLink(this.news[0].link);
  }

  getLink(link: string) {
    this.news.forEach(item => {
      item.active = false;
      if (item.link === link) {
        item.active = true;
      }
    });
    this.feedService.getFeedContent(link).subscribe(contents => {
      this.eventBusService.changeItem(contents);
    });
  }

}
