import { TestBed } from '@angular/core/testing';

import { EventDetailsActivatorService } from './event-details-activator.service';

describe('EventDetailsActivatorService', () => {
  let service: EventDetailsActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDetailsActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
