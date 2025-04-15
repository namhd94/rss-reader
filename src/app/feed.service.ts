import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
  apiKey = ''; // You can add an API key if needed for higher rate limits

  constructor(private http$: HttpClient) { }

  getFeedContent(url: string): Observable<any> {
    const apiUrl = `${this.rssToJsonServiceBaseUrl}${url}${this.apiKey ? '&api_key=' + this.apiKey : ''}`;
    
    return this.http$.get(apiUrl).pipe(
      catchError(error => {
        console.error('Error in feed service:', error);
        return throwError(error);
      })
    );
  }
}
