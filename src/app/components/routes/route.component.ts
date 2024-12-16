import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  standalone: false
})
export class RouteComponent implements OnInit {
  routes: any[] = [];

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.routeService.getRoutesAffectedByRoadworks().subscribe({
      next: (data) => this.routes = data,
      error: (err) => console.error(err)
    });
  }
  }
