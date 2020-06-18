import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  videos: Video[] = [];
  youtubeSubscription: Subscription = new Subscription();

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.youtubeSubscription = this.youtubeService.getVideos().subscribe(resp => this.videos.push(...resp));
  }

  showVideo(video: Video): void {
    Swal.fire({
      html: `
      <h4>${video.title}</h4>
      <hr>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/${video.resourceId.videoId}"
        frameborder="0"
        allow="accelerometer;
        autoplay;
        encrypted-media;
        gyroscope;
        picture-in-picture" allowfullscreen>
      </iframe>`,
      confirmButtonColor: 'red',
      confirmButtonText: 'Cerrar'
    });
  }

  ngOnDestroy(): void {
    this.youtubeSubscription.unsubscribe();
  }

}
