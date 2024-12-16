import { Component, OnInit } from '@angular/core';
import { BusStopService } from '../../services/bus-stop.service';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  standalone: false
})
export class BusStopComponent implements OnInit {
  busStops: any[] = [];

  constructor(private busStopService: BusStopService) {}

  ngOnInit(): void {
    this.busStopService.getBestBusStops().subscribe({
      next: (data) => this.busStops = data,
      error: (err) => console.error(err)
    });
  }
}
