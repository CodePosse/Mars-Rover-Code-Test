import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImagesRoutingModule} from './images-routing.module';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {NgMetro4Module} from 'ng-metro4';
import {NgxPaginationModule} from 'ngx-pagination';
import {RoverComponent} from './rover/rover.component';

@NgModule({
  declarations: [ImageGalleryComponent, RoverComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    NgMetro4Module,
    NgxPaginationModule
  ]
})
export class ImagesModule {
}
