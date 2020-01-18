import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';

const routes: Routes = [
  {path: '', component: ImageGalleryComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule {
}
