import { Component, OnInit } from '@angular/core';
import {first} from "rxjs/operators";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.less']
})
export class AddImageComponent implements OnInit {
  form : any = {
    name: '',
    url: ''
  }
  id!: string;
  isAddMode = true;
  loading = false;
  submitted = false;
  constructor(private router: Router, 
              private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isAddMode = false;
    }
    console.log("isAddMode: " + this.isAddMode)
    if(!this.isAddMode) {
      this.imageService.findById(this.id).subscribe(
        data => {
          this.form = data;
          console.log(data);
        }
      )
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.create();
    } else {
      this.update();
    }
  }

  create(): void {
    this.imageService.create(this.form).subscribe(
      () => {
        this.router.navigate(['/welcome/image'], {relativeTo: this.route});
      }
    )
  }

  update() {
    this.imageService.update(String(this.id), this.form).subscribe(
      () => {
        this.router.navigate(['/welcome/image'], {relativeTo: this.route});
      }
    )
  }
  
}
