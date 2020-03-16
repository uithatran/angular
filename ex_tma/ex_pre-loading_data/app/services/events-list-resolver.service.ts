import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { EventService } from './event.service';
import { EventDetailsComponent } from '../components/event-details/event-details.component';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(
    private eventService: EventService,
  ) { }

  resolve() {
    // need to import the map operator. For versions of RxJS 6.x.x and above,
    // have to use pipeable operators instead of getEvents.map() 
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
