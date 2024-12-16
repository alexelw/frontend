import { Routes } from '@angular/router';
import { BusStopComponent } from './components/bus-stop/bus-stop.component';
import { RoadComponent } from './components/road/road.component';
import { RouteComponent } from './components/routes/route.component';

export const routes: Routes = [
  {
    path: 'roads',
    title: 'roads',
    component: BusStopComponent
  }
];
