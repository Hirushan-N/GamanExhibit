import { Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DynamicControllerComponent } from './components/dynamic-controller/dynamic-controller.component';

export const routes: Routes = [
  { path: '', component: NavigationComponent }, // Main navigation page
  { path: ':controller', component: DynamicControllerComponent }, // Dynamic controller page
  { path: '**', redirectTo: '' }, // Redirect invalid routes
];
