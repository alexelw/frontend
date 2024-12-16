import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusStopComponent } from './components/bus-stop/bus-stop.component';
import { RoadComponent } from './components/road/road.component';
import { RouteComponent } from './components/routes/route.component';

const routes: Routes = [
  { path: '', redirectTo: 'bus-stops', pathMatch: 'full' },
  { path: 'bus-stops', component: BusStopComponent },
  { path: 'roads', component: RoadComponent },
  { path: 'routes', component: RouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
