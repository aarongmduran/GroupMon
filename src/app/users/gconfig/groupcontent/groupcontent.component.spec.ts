import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupcontentComponent } from './groupcontent.component';

describe('GroupcontentComponent', () => {
  let component: GroupcontentComponent;
  let fixture: ComponentFixture<GroupcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
