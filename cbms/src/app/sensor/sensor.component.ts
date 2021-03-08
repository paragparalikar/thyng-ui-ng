import { Component, OnInit } from '@angular/core';
import { Sensor } from './sensor';
import { SensorService } from './sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  sensors: Sensor[] = [];

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.findAll().subscribe(
      sensors => this.sensors = sensors
    );
  }

  add(){
    this.sensors.push(this.sensorService.buildDefault());
  }

  save(sensor: Sensor) {
    this.sensorService.save(sensor).subscribe(
      result => this.ngOnInit()
    );
  }

  delete(sensor: Sensor) {
    if(sensor.id){
      this.sensorService.delete(sensor.id).subscribe(
        result => this.ngOnInit()
      );
    } else {
      this.sensors.splice(this.sensors.indexOf(sensor), 1);
    }
  }

}
