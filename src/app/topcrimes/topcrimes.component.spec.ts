import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcrimesComponent } from './topcrimes.component';

describe('TopcrimesComponent', () => {
  let component: TopcrimesComponent;
  let fixture: ComponentFixture<TopcrimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopcrimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
