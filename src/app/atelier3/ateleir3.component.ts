import { Component, OnInit } from '@angular/core';
import { carte } from '../core/model/carte';

@Component({
  selector: 'app-ateleir3',
  templateUrl: './ateleir3.component.html',
  styleUrls: ['./ateleir3.component.css']
})
export class Ateleir3Component implements OnInit {
carte!:carte
  constructor() { }

  ngOnInit(): void {
    this.carte =new carte();
  }

}
