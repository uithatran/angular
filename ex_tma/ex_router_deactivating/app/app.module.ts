import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventDetailsActivatorService } from './event-details-activator.service';

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
      { path: 'events', component: EventsListComponent },
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
