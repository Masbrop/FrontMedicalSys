import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacienteIdComponent } from './lista-paciente-id.component';

describe('ListaPacienteIdComponent', () => {
  let component: ListaPacienteIdComponent;
  let fixture: ComponentFixture<ListaPacienteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPacienteIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPacienteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
