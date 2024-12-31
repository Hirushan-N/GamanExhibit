import { Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthComponent } from './components/auth/auth.component';
import { BusComponent } from './components/bus/bus.component';
import { RouteComponent } from './components/route/route.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleEntryComponent } from './components/schedule-entry/schedule-entry.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'bus', component: BusComponent },
  { path: 'route', component: RouteComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'schedule-entry', component: ScheduleEntryComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '' },
];
