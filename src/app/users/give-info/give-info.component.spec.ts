import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveInfoComponent } from './give-info.component';

describe('GiveInfoComponent', () => {
  let component: GiveInfoComponent;
  let fixture: ComponentFixture<GiveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
