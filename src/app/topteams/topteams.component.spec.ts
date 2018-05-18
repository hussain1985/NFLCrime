import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopteamsComponent } from './topteams.component';

describe('TopteamsComponent', () => {
  let component: TopteamsComponent;
  let fixture: ComponentFixture<TopteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
