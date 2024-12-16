
import { Component, OnInit } from '@angular/core';
import { RoadsService } from '../../services/road.service';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  standalone: false
})
export class RoadComponent implements OnInit {
  roads: any[] = [];

  constructor(private roadsService: RoadsService) {}

  ngOnInit(): void {
    this.roadsService.getRoadsToAvoid().subscribe({
      next: (data) => this.roads = data,
      error: (err) => console.error(err)
    });
  }
}
