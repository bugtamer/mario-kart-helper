import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gliders',
  templateUrl: './gliders.component.html',
  styleUrls: ['./gliders.component.css']
})
export class GlidersComponent implements OnInit {

  private _gliders: any = [{"name":"Super Glider","type":"G","size":null,"speed":{"ground":1,"water":1,"air":2,"antiGravity":0},"acceleration":1,"weight":1,"handling":{"ground":1,"water":0,"air":1,"antiGravity":1},"grid":1,"miniTurbo":1},{"name":"Waddle Wing","type":"G","size":null,"speed":{"ground":1,"water":1,"air":2,"antiGravity":0},"acceleration":1,"weight":1,"handling":{"ground":1,"water":0,"air":1,"antiGravity":1},"grid":1,"miniTurbo":1},{"name":"Hylian Kite","type":"G","size":null,"speed":{"ground":1,"water":1,"air":2,"antiGravity":0},"acceleration":1,"weight":1,"handling":{"ground":1,"water":0,"air":1,"antiGravity":1},"grid":1,"miniTurbo":1},{"name":"Cloud Glider","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Parachute","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Flower Glider","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Paper Glider","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Wario Wing","type":"G","size":null,"speed":{"ground":1,"water":0,"air":2,"antiGravity":1},"acceleration":1,"weight":2,"handling":{"ground":1,"water":1,"air":1,"antiGravity":0},"grid":0,"miniTurbo":1},{"name":"Plane Glider","type":"G","size":null,"speed":{"ground":1,"water":0,"air":2,"antiGravity":1},"acceleration":1,"weight":2,"handling":{"ground":1,"water":1,"air":1,"antiGravity":0},"grid":0,"miniTurbo":1},{"name":"Gold Glider","type":"G","size":null,"speed":{"ground":1,"water":0,"air":2,"antiGravity":1},"acceleration":1,"weight":2,"handling":{"ground":1,"water":1,"air":1,"antiGravity":0},"grid":0,"miniTurbo":1},{"name":"Peach Parasol","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2},{"name":"Parafoil","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2},{"name":"Bowser Kite","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2},{"name":"MKTV Parafoil","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2}];
  
  constructor() { }

  ngOnInit() {
  }

}
