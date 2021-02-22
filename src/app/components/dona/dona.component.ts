import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { BaseChartDirective, Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent implements OnInit {
  @Input() tittle: String = "Not tittle"; 
  @Input() doughnutChartLabels: Label[];
  @ViewChild(BaseChartDirective, {static: false}) chart: BaseChartDirective;

  
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
     {backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] }  
  ];
   
  constructor() { }

  ngOnInit() {
  }

}
