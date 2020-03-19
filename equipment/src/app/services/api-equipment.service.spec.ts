import { TestBed } from '@angular/core/testing';

import { ApiEquipmentService } from './api-equipment.service';

describe('ApiEquipmentService', () => {
  let service: ApiEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
