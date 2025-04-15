import { NgxSpinnerService } from 'ngx-spinner';
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
    {name: 'Tuoitre', active: false, link: 'https://tuoitre.vn/rss/tin-moi-nhat.rss'},
    {name: 'Laodong', active: false, link: 'https://laodong.vn/rss/thoi-su.rss'},
    {name: 'Vietnamnet', active: false, link: 'https://vietnamnet.vn/rss/thoi-su.rss'},
    {name: 'DoisongPhapluat', active: false, link: 'https://doisongphapluat.nguoiduatin.vn/rss/home.rss'},
    {name: 'Thanhnien', active: false, link: 'https://thanhnien.vn/rss/home.rss'}
  ];

  active = false;

  constructor(
    private eventBusService: EventBusService,
    private feedService: FeedService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getLink(this.news[0].link);
  }

  getLink(link: string) {
    this.spinner.show();
    this.news.forEach(item => {
      item.active = false;
      if (item.link === link) {
        item.active = true;
      }
    });
    this.feedService.getFeedContent(link).subscribe(
      contents => {
        try {
          if (contents && contents.status === 'ok') {
            this.eventBusService.changeItem(contents);
          } else {
            console.error('Invalid feed content format:', contents);
            this.eventBusService.showError();
          }
        } catch (error) {
          console.error('Error processing feed content:', error);
          this.eventBusService.showError();
        } finally {
          setTimeout(() => { this.spinner.hide(); }, 1000);
        }
      },
      error => {
        console.error('Error fetching feed content:', error);
        this.eventBusService.showError();
        this.spinner.hide();
      }
    );
  }

  toggle(e) {
    const target = e.target.closest('.toggle');
    target.classList.toggle('change');
    this.active = !this.active;
  }
}
