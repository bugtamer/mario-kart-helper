import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  
  getDrivers() {
    return [{"name":"Baby Peach","type":"D","size":"S","speed":{"ground":0,"water":0,"air":0,"antiGravity":0},"acceleration":4,"weight":0,"handling":{"ground":10,"water":10,"air":10,"antiGravity":10},"grid":5,"miniTurbo":5},{"name":"Baby Daisy","type":"D","size":"S","speed":{"ground":0,"water":0,"air":0,"antiGravity":0},"acceleration":4,"weight":0,"handling":{"ground":10,"water":10,"air":10,"antiGravity":10},"grid":5,"miniTurbo":5},{"name":"Baby Rosalina","type":"D","size":"S","speed":{"ground":0,"water":0,"air":0,"antiGravity":0},"acceleration":5,"weight":0,"handling":{"ground":9,"water":9,"air":9,"antiGravity":9},"grid":3,"miniTurbo":5},{"name":"Lemmy","type":"D","size":"S","speed":{"ground":0,"water":0,"air":0,"antiGravity":0},"acceleration":5,"weight":0,"handling":{"ground":9,"water":9,"air":9,"antiGravity":9},"grid":3,"miniTurbo":5},{"name":"Baby Mario","type":"D","size":"S","speed":{"ground":1,"water":1,"air":1,"antiGravity":1},"acceleration":5,"weight":1,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":4,"miniTurbo":4},{"name":"Baby Luigi","type":"D","size":"S","speed":{"ground":1,"water":1,"air":1,"antiGravity":1},"acceleration":5,"weight":1,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":4,"miniTurbo":4},{"name":"Dry Bones","type":"D","size":"S","speed":{"ground":1,"water":1,"air":1,"antiGravity":1},"acceleration":5,"weight":1,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":4,"miniTurbo":4},{"name":"Mii (Light)","type":"D","size":"S","speed":{"ground":1,"water":1,"air":1,"antiGravity":1},"acceleration":5,"weight":1,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":4,"miniTurbo":4},{"name":"Toadette","type":"D","size":"S","speed":{"ground":2,"water":2,"air":2,"antiGravity":2},"acceleration":5,"weight":2,"handling":{"ground":7,"water":7,"air":7,"antiGravity":7},"grid":2,"miniTurbo":4},{"name":"Wendy","type":"D","size":"S","speed":{"ground":2,"water":2,"air":2,"antiGravity":2},"acceleration":5,"weight":2,"handling":{"ground":7,"water":7,"air":7,"antiGravity":7},"grid":2,"miniTurbo":4},{"name":"Isabelle","type":"D","size":"S","speed":{"ground":2,"water":2,"air":2,"antiGravity":2},"acceleration":5,"weight":2,"handling":{"ground":7,"water":7,"air":7,"antiGravity":7},"grid":2,"miniTurbo":4},{"name":"Koopa","type":"D","size":"S","speed":{"ground":2,"water":2,"air":2,"antiGravity":2},"acceleration":4,"weight":2,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":5,"miniTurbo":4},{"name":"Lakitu","type":"D","size":"S","speed":{"ground":2,"water":2,"air":2,"antiGravity":2},"acceleration":4,"weight":2,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":5,"miniTurbo":4},{"name":"Bowser Jr","type":"D","size":"S","speed":{"ground":2,"water":2,"air":2,"antiGravity":2},"acceleration":4,"weight":2,"handling":{"ground":8,"water":8,"air":8,"antiGravity":8},"grid":5,"miniTurbo":4},{"name":"Toad","type":"D","size":"S","speed":{"ground":3,"water":3,"air":3,"antiGravity":3},"acceleration":4,"weight":3,"handling":{"ground":7,"water":7,"air":7,"antiGravity":7},"grid":4,"miniTurbo":3},{"name":"ShyGuy","type":"D","size":"S","speed":{"ground":3,"water":3,"air":3,"antiGravity":3},"acceleration":4,"weight":3,"handling":{"ground":7,"water":7,"air":7,"antiGravity":7},"grid":4,"miniTurbo":3},{"name":"Larry","type":"D","size":"S","speed":{"ground":3,"water":3,"air":3,"antiGravity":3},"acceleration":4,"weight":3,"handling":{"ground":7,"water":7,"air":7,"antiGravity":7},"grid":4,"miniTurbo":3},{"name":"Cat Peach","type":"D","size":"M","speed":{"ground":4,"water":4,"air":4,"antiGravity":4},"acceleration":4,"weight":3,"handling":{"ground":6,"water":6,"air":6,"antiGravity":6},"grid":3,"miniTurbo":3},{"name":"Villager Female","type":"D","size":"M","speed":{"ground":4,"water":4,"air":4,"antiGravity":4},"acceleration":4,"weight":3,"handling":{"ground":6,"water":6,"air":6,"antiGravity":6},"grid":3,"miniTurbo":3},{"name":"Female Inkling","type":"D","size":"M","speed":{"ground":4,"water":4,"air":4,"antiGravity":4},"acceleration":4,"weight":3,"handling":{"ground":6,"water":6,"air":6,"antiGravity":6},"grid":3,"miniTurbo":3},{"name":"Peach","type":"D","size":"M","speed":{"ground":5,"water":5,"air":5,"antiGravity":5},"acceleration":3,"weight":4,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":3,"miniTurbo":3},{"name":"Daisy","type":"D","size":"M","speed":{"ground":5,"water":5,"air":5,"antiGravity":5},"acceleration":3,"weight":4,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":3,"miniTurbo":3},{"name":"Yoshi","type":"D","size":"M","speed":{"ground":5,"water":5,"air":5,"antiGravity":5},"acceleration":3,"weight":4,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":3,"miniTurbo":3},{"name":"Tanooki Mario","type":"D","size":"M","speed":{"ground":5,"water":5,"air":5,"antiGravity":5},"acceleration":3,"weight":5,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":1,"miniTurbo":3},{"name":"VillagerMale","type":"D","size":"M","speed":{"ground":5,"water":5,"air":5,"antiGravity":5},"acceleration":3,"weight":5,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":1,"miniTurbo":3},{"name":"Male Inkling","type":"D","size":"M","speed":{"ground":5,"water":5,"air":5,"antiGravity":5},"acceleration":3,"weight":5,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":1,"miniTurbo":3},{"name":"Mario","type":"D","size":"M","speed":{"ground":6,"water":6,"air":6,"antiGravity":6},"acceleration":2,"weight":6,"handling":{"ground":4,"water":4,"air":4,"antiGravity":4},"grid":2,"miniTurbo":2},{"name":"Ludwig","type":"D","size":"M","speed":{"ground":6,"water":6,"air":6,"antiGravity":6},"acceleration":2,"weight":6,"handling":{"ground":4,"water":4,"air":4,"antiGravity":4},"grid":2,"miniTurbo":2},{"name":"Mii (Medium)","type":"D","size":"M","speed":{"ground":6,"water":6,"air":6,"antiGravity":6},"acceleration":2,"weight":6,"handling":{"ground":4,"water":4,"air":4,"antiGravity":4},"grid":2,"miniTurbo":2},{"name":"Luigi","type":"D","size":"M","speed":{"ground":6,"water":6,"air":6,"antiGravity":6},"acceleration":2,"weight":6,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":1,"miniTurbo":2},{"name":"Iggy","type":"D","size":"M","speed":{"ground":6,"water":6,"air":6,"antiGravity":6},"acceleration":2,"weight":6,"handling":{"ground":5,"water":5,"air":5,"antiGravity":5},"grid":1,"miniTurbo":2},{"name":"Metal Mario","type":"D","size":"M","speed":{"ground":8,"water":8,"air":8,"antiGravity":8},"acceleration":1,"weight":10,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":1,"miniTurbo":1},{"name":"PGPeach","type":"D","size":"M","speed":{"ground":8,"water":8,"air":8,"antiGravity":8},"acceleration":1,"weight":10,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":1,"miniTurbo":1},{"name":"Gold Mario","type":"D","size":"M","speed":{"ground":8,"water":8,"air":8,"antiGravity":8},"acceleration":1,"weight":10,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":1,"miniTurbo":1},{"name":"Rosalina","type":"D","size":"L","speed":{"ground":7,"water":7,"air":7,"antiGravity":7},"acceleration":1,"weight":7,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":3,"miniTurbo":2},{"name":"Link","type":"D","size":"L","speed":{"ground":7,"water":7,"air":7,"antiGravity":7},"acceleration":1,"weight":7,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":3,"miniTurbo":2},{"name":"King Boo","type":"D","size":"L","speed":{"ground":7,"water":7,"air":7,"antiGravity":7},"acceleration":1,"weight":7,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":3,"miniTurbo":2},{"name":"Dkong","type":"D","size":"L","speed":{"ground":9,"water":9,"air":9,"antiGravity":9},"acceleration":1,"weight":8,"handling":{"ground":2,"water":2,"air":2,"antiGravity":2},"grid":0,"miniTurbo":1},{"name":"Waluigi","type":"D","size":"L","speed":{"ground":9,"water":9,"air":9,"antiGravity":9},"acceleration":1,"weight":8,"handling":{"ground":2,"water":2,"air":2,"antiGravity":2},"grid":0,"miniTurbo":1},{"name":"Roy","type":"D","size":"L","speed":{"ground":9,"water":9,"air":9,"antiGravity":9},"acceleration":1,"weight":8,"handling":{"ground":2,"water":2,"air":2,"antiGravity":2},"grid":0,"miniTurbo":1},{"name":"Wario","type":"D","size":"L","speed":{"ground":10,"water":10,"air":10,"antiGravity":10},"acceleration":0,"weight":9,"handling":{"ground":1,"water":1,"air":1,"antiGravity":1},"grid":1,"miniTurbo":0},{"name":"Dry Bowser","type":"D","size":"L","speed":{"ground":10,"water":10,"air":10,"antiGravity":10},"acceleration":0,"weight":9,"handling":{"ground":1,"water":1,"air":1,"antiGravity":1},"grid":1,"miniTurbo":0},{"name":"Bowser","type":"D","size":"L","speed":{"ground":10,"water":10,"air":10,"antiGravity":10},"acceleration":0,"weight":10,"handling":{"ground":0,"water":0,"air":0,"antiGravity":0},"grid":0,"miniTurbo":0},{"name":"Morton","type":"D","size":"L","speed":{"ground":10,"water":10,"air":10,"antiGravity":10},"acceleration":0,"weight":10,"handling":{"ground":0,"water":0,"air":0,"antiGravity":0},"grid":0,"miniTurbo":0},{"name":"Mii (Heavy)","type":"D","size":"L","speed":{"ground":10,"water":10,"air":10,"antiGravity":10},"acceleration":0,"weight":10,"handling":{"ground":0,"water":0,"air":0,"antiGravity":0},"grid":0,"miniTurbo":0}];
  }
  
  
  getBodies() {
    return [{"name":"Standard Kart","type":"B","size":null,"speed":{"ground":3,"water":3,"air":3,"antiGravity":3},"acceleration":4,"weight":2,"handling":{"ground":3,"water":2,"air":3,"antiGravity":3},"grid":3,"miniTurbo":4},{"name":"The Duke","type":"B","size":null,"speed":{"ground":3,"water":3,"air":3,"antiGravity":3},"acceleration":4,"weight":2,"handling":{"ground":3,"water":2,"air":3,"antiGravity":3},"grid":3,"miniTurbo":4},{"name":"300 SL Roadster","type":"B","size":null,"speed":{"ground":3,"water":3,"air":3,"antiGravity":3},"acceleration":4,"weight":2,"handling":{"ground":3,"water":2,"air":3,"antiGravity":3},"grid":3,"miniTurbo":4},{"name":"Pipe Frame","type":"B","size":null,"speed":{"ground":1,"water":3,"air":1,"antiGravity":1},"acceleration":6,"weight":1,"handling":{"ground":5,"water":4,"air":2,"antiGravity":4},"grid":4,"miniTurbo":6},{"name":"Varmint","type":"B","size":null,"speed":{"ground":1,"water":3,"air":1,"antiGravity":1},"acceleration":6,"weight":1,"handling":{"ground":5,"water":4,"air":2,"antiGravity":4},"grid":4,"miniTurbo":6},{"name":"City Tripper","type":"B","size":null,"speed":{"ground":1,"water":3,"air":1,"antiGravity":1},"acceleration":6,"weight":1,"handling":{"ground":5,"water":4,"air":2,"antiGravity":4},"grid":4,"miniTurbo":6},{"name":"Mach 8","type":"B","size":null,"speed":{"ground":3,"water":3,"air":4,"antiGravity":5},"acceleration":3,"weight":3,"handling":{"ground":2,"water":2,"air":2,"antiGravity":4},"grid":4,"miniTurbo":4},{"name":"Sports Coupe (Sports Coupé)","type":"B","size":null,"speed":{"ground":3,"water":3,"air":4,"antiGravity":5},"acceleration":3,"weight":3,"handling":{"ground":2,"water":2,"air":2,"antiGravity":4},"grid":4,"miniTurbo":4},{"name":"Inkstriker","type":"B","size":null,"speed":{"ground":3,"water":3,"air":4,"antiGravity":5},"acceleration":3,"weight":3,"handling":{"ground":2,"water":2,"air":2,"antiGravity":4},"grid":4,"miniTurbo":4},{"name":"Steel Driver","type":"B","size":null,"speed":{"ground":4,"water":5,"air":0,"antiGravity":2},"acceleration":1,"weight":4,"handling":{"ground":1,"water":5,"air":1,"antiGravity":1},"grid":3,"miniTurbo":2},{"name":"Tri-Speeder","type":"B","size":null,"speed":{"ground":4,"water":5,"air":0,"antiGravity":2},"acceleration":1,"weight":4,"handling":{"ground":1,"water":5,"air":1,"antiGravity":1},"grid":3,"miniTurbo":2},{"name":"Bone Rattler","type":"B","size":null,"speed":{"ground":4,"water":5,"air":0,"antiGravity":2},"acceleration":1,"weight":4,"handling":{"ground":1,"water":5,"air":1,"antiGravity":1},"grid":3,"miniTurbo":2},{"name":"Cat Cruiser","type":"B","size":null,"speed":{"ground":2,"water":2,"air":4,"antiGravity":3},"acceleration":5,"weight":2,"handling":{"ground":4,"water":2,"air":4,"antiGravity":3},"grid":3,"miniTurbo":5},{"name":"Comet","type":"B","size":null,"speed":{"ground":2,"water":2,"air":4,"antiGravity":3},"acceleration":5,"weight":2,"handling":{"ground":4,"water":2,"air":4,"antiGravity":3},"grid":3,"miniTurbo":5},{"name":"Yoshi Bike","type":"B","size":null,"speed":{"ground":2,"water":2,"air":4,"antiGravity":3},"acceleration":5,"weight":2,"handling":{"ground":4,"water":2,"air":4,"antiGravity":3},"grid":3,"miniTurbo":5},{"name":"Teddy Buggy","type":"B","size":null,"speed":{"ground":2,"water":2,"air":4,"antiGravity":3},"acceleration":5,"weight":2,"handling":{"ground":4,"water":2,"air":4,"antiGravity":3},"grid":3,"miniTurbo":5},{"name":"Circuit Special","type":"B","size":null,"speed":{"ground":5,"water":1,"air":2,"antiGravity":4},"acceleration":1,"weight":3,"handling":{"ground":1,"water":1,"air":0,"antiGravity":2},"grid":1,"miniTurbo":1},{"name":"Badwagon","type":"B","size":null,"speed":{"ground":5,"water":1,"air":2,"antiGravity":4},"acceleration":1,"weight":3,"handling":{"ground":1,"water":1,"air":0,"antiGravity":2},"grid":1,"miniTurbo":1},{"name":"Prancer","type":"B","size":null,"speed":{"ground":5,"water":1,"air":2,"antiGravity":4},"acceleration":1,"weight":3,"handling":{"ground":1,"water":1,"air":0,"antiGravity":2},"grid":1,"miniTurbo":1},{"name":"Badwagon","type":"B","size":null,"speed":{"ground":5,"water":2,"air":1,"antiGravity":3},"acceleration":0,"weight":4,"handling":{"ground":0,"water":1,"air":0,"antiGravity":1},"grid":5,"miniTurbo":0},{"name":"Prancer","type":"B","size":null,"speed":{"ground":5,"water":2,"air":1,"antiGravity":3},"acceleration":0,"weight":4,"handling":{"ground":0,"water":1,"air":0,"antiGravity":1},"grid":5,"miniTurbo":0},{"name":"GLA","type":"B","size":null,"speed":{"ground":5,"water":2,"air":1,"antiGravity":3},"acceleration":0,"weight":4,"handling":{"ground":0,"water":1,"air":0,"antiGravity":1},"grid":5,"miniTurbo":0},{"name":"Prancer","type":"B","size":null,"speed":{"ground":4,"water":3,"air":3,"antiGravity":3},"acceleration":2,"weight":1,"handling":{"ground":3,"water":3,"air":3,"antiGravity":2},"grid":2,"miniTurbo":3},{"name":"Sport Bike","type":"B","size":null,"speed":{"ground":4,"water":3,"air":3,"antiGravity":3},"acceleration":2,"weight":1,"handling":{"ground":3,"water":3,"air":3,"antiGravity":2},"grid":2,"miniTurbo":3},{"name":"Jet Bike","type":"B","size":null,"speed":{"ground":4,"water":3,"air":3,"antiGravity":3},"acceleration":2,"weight":1,"handling":{"ground":3,"water":3,"air":3,"antiGravity":2},"grid":2,"miniTurbo":3},{"name":"Biddybuggy (Buggybud)","type":"B","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":2},"acceleration":7,"weight":0,"handling":{"ground":5,"water":4,"air":4,"antiGravity":5},"grid":4,"miniTurbo":7},{"name":"Mr. Scooty (Mr Scooty)","type":"B","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":2},"acceleration":7,"weight":0,"handling":{"ground":5,"water":4,"air":4,"antiGravity":5},"grid":4,"miniTurbo":7},{"name":"Landship","type":"B","size":null,"speed":{"ground":1,"water":5,"air":2,"antiGravity":0},"acceleration":6,"weight":0,"handling":{"ground":4,"water":5,"air":3,"antiGravity":2},"grid":6,"miniTurbo":6},{"name":"Streetle","type":"B","size":null,"speed":{"ground":1,"water":5,"air":2,"antiGravity":0},"acceleration":6,"weight":0,"handling":{"ground":4,"water":5,"air":3,"antiGravity":2},"grid":6,"miniTurbo":6},{"name":"Sneeker (Bounder)","type":"B","size":null,"speed":{"ground":4,"water":2,"air":3,"antiGravity":3},"acceleration":2,"weight":2,"handling":{"ground":3,"water":2,"air":2,"antiGravity":3},"grid":0,"miniTurbo":3},{"name":"Standard Bike","type":"B","size":null,"speed":{"ground":4,"water":2,"air":3,"antiGravity":3},"acceleration":2,"weight":2,"handling":{"ground":3,"water":2,"air":2,"antiGravity":3},"grid":0,"miniTurbo":3},{"name":"Blue Falcon","type":"B","size":null,"speed":{"ground":4,"water":2,"air":3,"antiGravity":3},"acceleration":2,"weight":2,"handling":{"ground":3,"water":2,"air":2,"antiGravity":3},"grid":0,"miniTurbo":3},{"name":"Tanooki Kart","type":"B","size":null,"speed":{"ground":2,"water":2,"air":3,"antiGravity":4},"acceleration":5,"weight":1,"handling":{"ground":4,"water":3,"air":3,"antiGravity":4},"grid":5,"miniTurbo":5},{"name":"Blue Falcon","type":"B","size":null,"speed":{"ground":2,"water":2,"air":3,"antiGravity":4},"acceleration":5,"weight":1,"handling":{"ground":4,"water":3,"air":3,"antiGravity":4},"grid":5,"miniTurbo":5},{"name":"Tanooki Kart","type":"B","size":null,"speed":{"ground":2,"water":2,"air":3,"antiGravity":4},"acceleration":5,"weight":1,"handling":{"ground":4,"water":3,"air":3,"antiGravity":4},"grid":5,"miniTurbo":5},{"name":"W 25 Silver Arrow","type":"B","size":null,"speed":{"ground":2,"water":2,"air":3,"antiGravity":4},"acceleration":5,"weight":1,"handling":{"ground":4,"water":3,"air":3,"antiGravity":4},"grid":5,"miniTurbo":5},{"name":"Blue Falcon","type":"B","size":null,"speed":{"ground":4,"water":2,"air":3,"antiGravity":4},"acceleration":3,"weight":0,"handling":{"ground":2,"water":3,"air":1,"antiGravity":5},"grid":3,"miniTurbo":3},{"name":"Tanooki Kart","type":"B","size":null,"speed":{"ground":4,"water":2,"air":3,"antiGravity":4},"acceleration":3,"weight":0,"handling":{"ground":2,"water":3,"air":1,"antiGravity":5},"grid":3,"miniTurbo":3},{"name":"Tanooki Kart","type":"B","size":null,"speed":{"ground":2,"water":4,"air":3,"antiGravity":3},"acceleration":2,"weight":3,"handling":{"ground":4,"water":4,"air":3,"antiGravity":3},"grid":7,"miniTurbo":3},{"name":"Koopa Clown","type":"B","size":null,"speed":{"ground":2,"water":4,"air":3,"antiGravity":3},"acceleration":2,"weight":3,"handling":{"ground":4,"water":4,"air":3,"antiGravity":3},"grid":7,"miniTurbo":3}];
  }


  getTires() {
    return [{"name":"Standard (Normal)","type":"T","size":null,"speed":{"ground":2,"water":3,"air":3,"antiGravity":2},"acceleration":4,"weight":2,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":5,"miniTurbo":3},{"name":"Blue Standard (Normal Blue)","type":"T","size":null,"speed":{"ground":2,"water":3,"air":3,"antiGravity":2},"acceleration":4,"weight":2,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":5,"miniTurbo":3},{"name":"GLA Tires (GLA Wheels)","type":"T","size":null,"speed":{"ground":2,"water":3,"air":3,"antiGravity":2},"acceleration":4,"weight":2,"handling":{"ground":3,"water":3,"air":3,"antiGravity":3},"grid":5,"miniTurbo":3},{"name":"Monster","type":"T","size":null,"speed":{"ground":2,"water":2,"air":2,"antiGravity":1},"acceleration":2,"weight":2,"handling":{"ground":4,"water":0,"air":1,"antiGravity":1},"grid":0,"miniTurbo":7},{"name":"Hot Monster (Funky Monster)","type":"T","size":null,"speed":{"ground":2,"water":2,"air":1,"antiGravity":2},"acceleration":2,"weight":4,"handling":{"ground":0,"water":1,"air":1,"antiGravity":0},"grid":7,"miniTurbo":2},{"name":"Roller","type":"T","size":null,"speed":{"ground":0,"water":3,"air":3,"antiGravity":0},"acceleration":6,"weight":0,"handling":{"ground":4,"water":4,"air":4,"antiGravity":4},"grid":4,"miniTurbo":6},{"name":"Azure Roller","type":"T","size":null,"speed":{"ground":0,"water":3,"air":3,"antiGravity":0},"acceleration":6,"weight":0,"handling":{"ground":4,"water":4,"air":4,"antiGravity":4},"grid":4,"miniTurbo":6},{"name":"Slim","type":"T","size":null,"speed":{"ground":3,"water":2,"air":2,"antiGravity":4},"acceleration":2,"weight":2,"handling":{"ground":4,"water":4,"air":4,"antiGravity":3},"grid":1,"miniTurbo":2},{"name":"Wood (Wooden)","type":"T","size":null,"speed":{"ground":3,"water":2,"air":2,"antiGravity":4},"acceleration":2,"weight":2,"handling":{"ground":4,"water":4,"air":4,"antiGravity":3},"grid":1,"miniTurbo":2},{"name":"Crimson Slim","type":"T","size":null,"speed":{"ground":3,"water":2,"air":2,"antiGravity":4},"acceleration":2,"weight":2,"handling":{"ground":4,"water":4,"air":4,"antiGravity":3},"grid":1,"miniTurbo":2},{"name":"Slick","type":"T","size":null,"speed":{"ground":4,"water":0,"air":0,"antiGravity":4},"acceleration":1,"weight":3,"handling":{"ground":2,"water":0,"air":1,"antiGravity":2},"grid":0,"miniTurbo":0},{"name":"Cyber Slick","type":"T","size":null,"speed":{"ground":4,"water":0,"air":0,"antiGravity":4},"acceleration":1,"weight":3,"handling":{"ground":2,"water":0,"air":1,"antiGravity":2},"grid":0,"miniTurbo":0},{"name":"Metal","type":"T","size":null,"speed":{"ground":4,"water":3,"air":2,"antiGravity":1},"acceleration":0,"weight":4,"handling":{"ground":2,"water":2,"air":0,"antiGravity":1},"grid":2,"miniTurbo":0},{"name":"Gold Tires (Gold Wheels)","type":"T","size":null,"speed":{"ground":4,"water":3,"air":2,"antiGravity":1},"acceleration":0,"weight":4,"handling":{"ground":2,"water":2,"air":0,"antiGravity":1},"grid":2,"miniTurbo":0},{"name":"Button","type":"T","size":null,"speed":{"ground":1,"water":2,"air":2,"antiGravity":2},"acceleration":5,"weight":0,"handling":{"ground":3,"water":3,"air":2,"antiGravity":4},"grid":3,"miniTurbo":5},{"name":"Leaf Tires (Leaf Tyres)","type":"T","size":null,"speed":{"ground":1,"water":2,"air":2,"antiGravity":2},"acceleration":5,"weight":0,"handling":{"ground":3,"water":3,"air":2,"antiGravity":4},"grid":3,"miniTurbo":5},{"name":"Off-Road","type":"T","size":null,"speed":{"ground":3,"water":4,"air":1,"antiGravity":2},"acceleration":3,"weight":3,"handling":{"ground":1,"water":1,"air":2,"antiGravity":2},"grid":6,"miniTurbo":1},{"name":"Retro Off-Road","type":"T","size":null,"speed":{"ground":3,"water":4,"air":1,"antiGravity":2},"acceleration":3,"weight":3,"handling":{"ground":1,"water":1,"air":2,"antiGravity":2},"grid":6,"miniTurbo":1},{"name":"Triforce Tires (Triforce Tyres)","type":"T","size":null,"speed":{"ground":3,"water":4,"air":1,"antiGravity":2},"acceleration":3,"weight":3,"handling":{"ground":1,"water":1,"air":2,"antiGravity":2},"grid":6,"miniTurbo":1},{"name":"Sponge","type":"T","size":null,"speed":{"ground":1,"water":1,"air":4,"antiGravity":1},"acceleration":4,"weight":1,"handling":{"ground":2,"water":1,"air":3,"antiGravity":2},"grid":6,"miniTurbo":4},{"name":"Cushion","type":"T","size":null,"speed":{"ground":1,"water":1,"air":4,"antiGravity":1},"acceleration":4,"weight":1,"handling":{"ground":2,"water":1,"air":3,"antiGravity":2},"grid":6,"miniTurbo":4}];
  }


  getGliders() {
    return [{"name":"Super Glider","type":"G","size":null,"speed":{"ground":1,"water":1,"air":2,"antiGravity":0},"acceleration":1,"weight":1,"handling":{"ground":1,"water":0,"air":1,"antiGravity":1},"grid":1,"miniTurbo":1},{"name":"Waddle Wing","type":"G","size":null,"speed":{"ground":1,"water":1,"air":2,"antiGravity":0},"acceleration":1,"weight":1,"handling":{"ground":1,"water":0,"air":1,"antiGravity":1},"grid":1,"miniTurbo":1},{"name":"Hylian Kite","type":"G","size":null,"speed":{"ground":1,"water":1,"air":2,"antiGravity":0},"acceleration":1,"weight":1,"handling":{"ground":1,"water":0,"air":1,"antiGravity":1},"grid":1,"miniTurbo":1},{"name":"Cloud Glider","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Parachute","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Flower Glider","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Paper Glider","type":"G","size":null,"speed":{"ground":0,"water":1,"air":1,"antiGravity":1},"acceleration":2,"weight":0,"handling":{"ground":1,"water":0,"air":2,"antiGravity":1},"grid":1,"miniTurbo":2},{"name":"Wario Wing","type":"G","size":null,"speed":{"ground":1,"water":0,"air":2,"antiGravity":1},"acceleration":1,"weight":2,"handling":{"ground":1,"water":1,"air":1,"antiGravity":0},"grid":0,"miniTurbo":1},{"name":"Plane Glider","type":"G","size":null,"speed":{"ground":1,"water":0,"air":2,"antiGravity":1},"acceleration":1,"weight":2,"handling":{"ground":1,"water":1,"air":1,"antiGravity":0},"grid":0,"miniTurbo":1},{"name":"Gold Glider","type":"G","size":null,"speed":{"ground":1,"water":0,"air":2,"antiGravity":1},"acceleration":1,"weight":2,"handling":{"ground":1,"water":1,"air":1,"antiGravity":0},"grid":0,"miniTurbo":1},{"name":"Peach Parasol","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2},{"name":"Parafoil","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2},{"name":"Bowser Kite","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2},{"name":"MKTV Parafoil","type":"G","size":null,"speed":{"ground":0,"water":0,"air":1,"antiGravity":1},"acceleration":2,"weight":1,"handling":{"ground":1,"water":1,"air":2,"antiGravity":0},"grid":0,"miniTurbo":2}];
  }

}
