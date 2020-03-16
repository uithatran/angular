import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventDetailsActivatorService } from './services/event-details-activator.service';
import { EventsListResolverService } from './services/events-list-resolver.service';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventsListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'events', component: EventsListComponent, resolve:{events:EventsListResolverService} },
      { path: 'events/new', component: CreateEventComponent },
      { path: 'events/:eventId',
        component: EventDetailsComponent,
        canActivate:[EventDetailsActivatorService],
        canDeactivate: [EventDetailsActivatorService],
      },
      // 
      // { path: '', redirectTo: '/events', pathMatch:'full' },  
    ])
  ],
  providers: [EventService, EventsListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
