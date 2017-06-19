import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosComponent } from './scenarios.component';

describe('ScenariosComponent', () => {
  let component: ScenariosComponent;
  let fixture: ComponentFixture<ScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
