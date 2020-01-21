import { Component, Input, OnInit } from '@angular/core';
import { NASAPhoto, RoverCamera } from '../../shared/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'nmr-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss']
})
export class RoverComponent implements OnInit {

  public RoverCameras: RoverCamera[] = [
    { abbreviation: 'FHAZ', camera: 'Front Hazard Avoidance Camera', curiosity: true, opportunity: true, spirit: true },
    { abbreviation: 'RHAZ', camera: 'Rear Hazard Avoidance Camera', curiosity: true, opportunity: true, spirit: true },
    { abbreviation: 'MAST', camera: 'Mast Camera', curiosity: true, opportunity: false, spirit: false },
    { abbreviation: 'CHEMCAM', camera: 'Chemistry and Camera Complex', curiosity: true, opportunity: false, spirit: false },
    { abbreviation: 'MAHLI', camera: 'Mars Hand Lens Imager', curiosity: true, opportunity: false, spirit: false },
    { abbreviation: 'MARDI', camera: 'Mars Descent Imager', curiosity: true, opportunity: false, spirit: false },
    { abbreviation: 'NAVCAM', camera: 'Navigation Camera', curiosity: true, opportunity: true, spirit: true },
    { abbreviation: 'PANCAM', camera: 'Panoramic Camera', curiosity: false, opportunity: true, spirit: true },
    {
      abbreviation: 'MINITES',
      camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
      curiosity: false,
      opportunity: true,
      spirit: true
    },
  ];

  @Input() public CurrentRover = 'curiosity';
  public RoverCamera: RoverCamera = {};
  public Cameras = {};
  public SelectedCamera = 'NAVCAM';
  public Sol = 1000;
  public Photos: NASAPhoto[] = [];
  public SelectedPhoto: NASAPhoto = {};
  public Loading = false;

  // Pagination
  public Total = 0;
  public CurrentPage = 1;
  public PageSize = 6;

  constructor(
    private api: ApiService
  ) {
    this.RoverCameras.map(c => {
      this.Cameras[c.abbreviation] = c.camera;
    });
  }

  ngOnInit() {
    this.GetImages(this.SelectedCamera, this.Sol, this.CurrentRover);
  }

  public FindRoverCamera(): RoverCamera {
    return this.RoverCameras.find(c => c.abbreviation === this.SelectedCamera);
  }

  public async UpdateParams() {
    this.RoverCamera = this.FindRoverCamera();
  }

  public async GetImages(camera: string, sol: number, rover: string) {
    if (this.Loading) {
      return;
    }
    try {
      this.Loading = true;
      const res: any = await this.api.GetImages(camera, sol, rover);

      const photos = res.photos || [];

      // this.Photos = photos; pagination related
      this.Photos = photos.slice(Math.max(photos.length - 4, 1));

      this.Total = this.Photos.length;
      this.Loading = false;
      this.UpdateParams();
    } catch (e) {
      console.error(e);
      this.Loading = false;
    }
  }

  public OnCameraChange() {
    this.GetImages(this.SelectedCamera, this.Sol, this.CurrentRover);
    console.log('You changed the camera to: ' + this.SelectedCamera, this.Sol, this.CurrentRover);
  }

  public GetTotalPages(): number {
    return Math.floor(this.Total / this.PageSize) + 1;
  }

}
