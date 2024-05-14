import { TestBed } from '@angular/core/testing';

import { RegistrarDoctorService } from './registrar-doctor.service';

describe('RegistrarDoctorService', () => {
  let service: RegistrarDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
