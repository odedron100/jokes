import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonJokesComponent } from './json-jokes.component';

describe('JsonJokesComponent', () => {
  let component: JsonJokesComponent;
  let fixture: ComponentFixture<JsonJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
