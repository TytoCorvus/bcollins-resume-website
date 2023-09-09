import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowOverlayComponent } from './snow-overlay.component';

describe('SnowOverlayComponent', () => {
  let component: SnowOverlayComponent;
  let fixture: ComponentFixture<SnowOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
