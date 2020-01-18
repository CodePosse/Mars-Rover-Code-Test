import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LatestPhotoComponent} from './latest-photo.component';

describe('LatestPhotoComponent', () => {
  let component: LatestPhotoComponent;
  let fixture: ComponentFixture<LatestPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LatestPhotoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
