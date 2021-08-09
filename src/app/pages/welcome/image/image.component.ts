import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {

  images!: Image[];
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    this.imageService.findAll().subscribe(
      data => {
        this.images = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteImage(id: number) {
    this.imageService.delete(String(id)).subscribe(
      () => {
        this.retrieveData();
      }
    )
  }

}
