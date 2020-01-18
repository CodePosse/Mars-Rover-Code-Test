import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {NASAPhoto} from '../shared/interfaces';

@Component({
  selector: 'nmr-latest-photo',
  templateUrl: './latest-photo.component.html',
  styleUrls: ['./latest-photo.component.scss']
})
export class LatestPhotoComponent implements OnInit {

  public Loading = false;
  public Photo: NASAPhoto = {};

  private Sol = 1000;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.GetImages();
  }

  public async GetImages() {
    if (this.Loading) {
      return;
    }
    try {
      this.Loading = true;
      const curiosity: any = await this.api.GetImages(null, this.Sol, 'curiosity');
      const opportunity: any = await this.api.GetImages(null, this.Sol, 'opportunity');
      const spirit: any = await this.api.GetImages(null, this.Sol, 'spirit');

      const all = [].concat(curiosity.photos || [], opportunity.photos || [], spirit.photos || []);

      const date = Date.now();

      all.sort((a, b) => {
        const date1: any = new Date(a.earth_date);
        const date2: any = new Date(b.earth_date);
        const distancea = Math.abs(date - date2);
        const distanceb = Math.abs(date - date2);
        return distancea - distanceb; // sort a before b when the distance is smaller
      });

      this.Photo = all[0] || {};
      console.log(this.Photo);
      this.Loading = false;
    } catch (e) {
      console.error(e);
      this.Loading = false;
    }
  }
}
