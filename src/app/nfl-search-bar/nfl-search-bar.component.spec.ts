import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflSearchBarComponent } from './nfl-search-bar.component';

describe('NflSearchBarComponent', () => {
  let component: NflSearchBarComponent;
  let fixture: ComponentFixture<NflSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
