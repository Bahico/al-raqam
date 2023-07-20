import {Component} from "@angular/core";
import {Chart, ChartConfiguration, ChartData, ChartType} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'statistics-sale',
  templateUrl: 'statistics-sale.template.html'
})

export class StatisticsSaleComponent {
  data: ChartData = {labels: ["qales", "nima gap"], datasets: [{data: [3,5]}]};

  public chartDataLabels = [ChartDataLabels];

  public options: ChartConfiguration<ChartType>['options'] = {
    plugins: {
      datalabels: {
        align: 'center',
        textStrokeWidth: 0.5,
        color: '#000',
        anchor: 'center'
      },
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          boxPadding: 200,
          usePointStyle: true,
          font: {
            size: 14
          }
        }
      },
    },
    layout: {
      autoPadding: true
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.5,
    onResize(chart: Chart, size: { width: number; height: number }) {
      let padding = chart.options.plugins?.legend?.labels?.padding
      if (size.width >= 400) {
        padding = 30
      } else if (size.width <= 290){
        padding = 0
      }
    },
    resizeDelay: 2,
  }
}
