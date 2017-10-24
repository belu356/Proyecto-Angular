import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajePostComponent } from './personaje-post.component';

describe('PersonajePostComponent', () => {
  let component: PersonajePostComponent;
  let fixture: ComponentFixture<PersonajePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
