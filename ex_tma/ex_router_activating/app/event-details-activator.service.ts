import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsActivatorService implements CanActivate{

  constructor(
    private eventService: EventService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
   let event = this.eventService.getEvent(+route.params['eventId'])

   return !!event
  }
}
