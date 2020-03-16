import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate} from '@angular/router';
import { EventService } from './event.service';
import { EventDetailsComponent } from '../components/event-details/event-details.component';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsActivatorService implements CanActivate, CanDeactivate<EventDetailsComponent>{

  constructor(
    private eventService: EventService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
   let event = this.eventService.getEvent(+route.params['eventId'])
   return !!event
  }

  canDeactivate(component: EventDetailsComponent) {
    return component.reviewed;
  }
}
