import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { SettingsService } from '../services/settings.service';


declare function customInitFuntions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor( private settinServices: SettingsService) { }

  ngOnInit() {
    customInitFuntions();
  }

}
