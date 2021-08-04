import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactMovieCardComponent } from './compact-movie-card.component';

describe('CompactMovieCardComponent', () => {
  let component: CompactMovieCardComponent;
  let fixture: ComponentFixture<CompactMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactMovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
