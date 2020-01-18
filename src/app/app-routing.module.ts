import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LatestPhotoComponent} from './latest-photo/latest-photo.component';

const routes: Routes = [
  {path: '', redirectTo: 'image-gallery', pathMatch: 'full'},
  {path: 'latest-photo', component: LatestPhotoComponent},
  {path: 'image-gallery', pathMatch: 'full', loadChildren: () => import('./images/images.module').then(m => m.ImagesModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
