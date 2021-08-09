import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { DemoNgZorroAntdModule } from "../../ng-zorro-antd.module";
import { WelcomeComponent } from './welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { AddImageComponent } from './add-image/add-image.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [WelcomeRoutingModule, DemoNgZorroAntdModule, CommonModule, FormsModule],
  declarations: [WelcomeComponent, ProfileComponent, GalleryComponent, ImageComponent, AddImageComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
