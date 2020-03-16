import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.events = this.activatedRoute.snapshot.data['events'];
  }

}
