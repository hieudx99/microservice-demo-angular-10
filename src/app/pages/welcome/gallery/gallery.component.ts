import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { Image } from 'src/app/models/image';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  message = '';
  gallery!: Gallery;
  images!: Image[];
  
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.retrieveData();
  }
  retrieveData(): void {
    this.galleryService.getAll().subscribe(
      data => {
        this.gallery = data;
        this.images = data.images;
        console.log(data);
        console.log(this.images);
      },
      error => {
        console.log(error);
      }
      

    )
  }

}
