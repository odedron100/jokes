import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeAppComponent } from './joke-app.component';

describe('JokeAppComponent', () => {
  let component: JokeAppComponent;
  let fixture: ComponentFixture<JokeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
