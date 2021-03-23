import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashShowsComponent } from './dash-shows.component';

describe('DashShowsComponent', () => {
  let component: DashShowsComponent;
  let fixture: ComponentFixture<DashShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
