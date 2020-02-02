import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http$: HttpClient) { }

  getFeedContent(url: string): Observable<any> {
    return this.http$.get(`${this.rssToJsonServiceBaseUrl + url}`);
  }
}
