import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // add your own API frpm https://api.nasa.gov this one belongs to me, @CodePosse
  private readonly API_KEY = 'IsgAOuqyYp5ZsWRZdy5fD3ikHmL8hzPjEhCqmLFQ';
  constructor(private http: HttpClient) {
  }

  public GetImages(camera: string, sol: number, rover: string) {
    const c = camera ? `camera=${camera}&` : '';
    return this.http
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${c}sol=${sol}&api_key=${this.API_KEY}`)
      .toPromise();
  }
}
