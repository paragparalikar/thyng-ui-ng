import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor/sensor';
import { SensorService } from '../sensor/sensor.service';
import { Thing } from '../thing/thing';
import { ThingService } from '../thing/thing.service';
import { Channel } from './channel';
import { ChannelService } from './channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  names: Array<string> = ["Channel 'A'", "Channel 'B'", "Channel 'C'", "Channel 'D'", "Channel 'E'", "Channel 'F'", "Channel 'G'", "Channel 'H'"];
  channels: Channel[] = [];

  things: Thing[] = [];
  sensors: Sensor[] = [];
  alert: boolean=false;


  constructor(private channelService: ChannelService,
    private thingService: ThingService,
    private sensorService: SensorService) { }

  ngOnInit(): void {


    this.channelService.findAll().subscribe(
      channels => {
        this.channels = channels;
        this.loadSensors();
        this.loadThings();
      }
    );

    

  }
  
  closeAlert() {

    this.alert = false;
  }

  private loadSensors() {
    this.sensorService.findAll().subscribe(
      sensors => {
        this.sensors = sensors;
        sensors.forEach(sensor => {
          this.channels.forEach(channel => {
            if (sensor.id === channel.sensorId) {
              channel.sensor = sensor;

            }
          });
        });
      }
    );
  }

  private loadThings() {
    this.thingService.findAll().subscribe(
      things => {
        this.things = things;
        things.forEach(thing => {
          this.channels.forEach(channel => {
            if (thing.id === channel.thingId) {
              channel.thing = thing;
            }
          });
        });
      }
    );
  }

  thingSelected(obj: any) {
    console.log(obj.target.value);
  }

  private process(channel: Channel) {
    channel.thingId = channel.thing ? channel.thing.id : undefined;
    channel.thing = undefined;
    channel.sensorId = channel.sensor ? channel.sensor.id : undefined;
    channel.sensor = undefined;
  }

  save(channel: Channel) {
    this.process(channel);
    this.channelService.save(channel).subscribe(
      result => this.ngOnInit()
    );
    this.alert = true;
    setTimeout(() => this.alert = false, 3500);
  }

  saveAll() {
    console.log(this.channels);
    this.channels.forEach(channel => this.process(channel));
    this.channelService.saveAll(this.channels).subscribe(
      channels => this.ngOnInit()
    );
    this.alert = true;
    setTimeout(() => this.alert = false, 3500);
  }

}
