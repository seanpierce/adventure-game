import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitchComponent } from './sitch.component';

describe('SitchComponent', () => {
  let component: SitchComponent;
  let fixture: ComponentFixture<SitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
