import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { YoutubeResponse, Video } from '../models/youtube.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL = environment.youtubeUrl;
  private apiKey = environment.apiKey;
  private playlist = environment.uploadsId;
  private nextPageToken: string = '';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    const url = `${this.youtubeURL}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('key', this.apiKey)
      .set('playlistId', this.playlist)
      .set('maxResults', '9')
      .set('pageToken', this.nextPageToken);

    return this.http.get<YoutubeResponse>(url, { params })
      .pipe(
        map(resp => {
          this.nextPageToken = resp.nextPageToken
          return resp.items
        }),
        map(items => items.map(video => video.snippet))
      );
  }

}
