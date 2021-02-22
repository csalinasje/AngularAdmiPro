import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styles: ['./nopagesfound.component.scss']
})
export class NopagesfoundComponent implements OnInit {

    year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
