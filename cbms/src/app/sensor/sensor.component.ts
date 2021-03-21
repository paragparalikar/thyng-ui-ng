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
  alert: boolean=false;
  openModal: boolean=false;
  sensor: Sensor;
  alertDelete: boolean=false;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.findAll().subscribe(
      sensors => this.sensors = sensors
    );
  }

  findDuplicate(sensor: string):Boolean{
    
    let test = this.sensors.filter(data=> data.name.toUpperCase()==sensor.toUpperCase() && name!=null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }

  }

  alphanumaricOnly(event){
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  numaricOnly(event){
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z/ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  closeAlert() {

    this.alert = false;
  }

  closeAlertDelete(){
    this.alertDelete = false;
  }

  add(){
    this.sensors.push(this.sensorService.buildDefault());
  }

  save(sensor: Sensor) {
    this.sensorService.save(sensor).subscribe(
      result => this.ngOnInit()
    );
    this.alert = true;
    setTimeout(() => this.alert = false, 3500);
  }

  delete(sensor: Sensor) {
    this.openModal = true;
    this.sensor=sensor;
  }

  deleteSensor() {
    if (this.sensor.id) {
      this.sensorService.delete(this.sensor.id).subscribe(
        result => this.ngOnInit()
      );
    } else {
      this.sensors.splice(this.sensors.indexOf(this.sensor), 1);
    }
    this.openModal = false;
    this.alertDelete=true;
    setTimeout(()=>this.alertDelete=false, 3500);
  }

  doNothing() {
    this.openModal = false;
  }

}
