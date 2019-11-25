import { Component, OnInit, AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";
import * as Chart from 'chart.js';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit,AfterViewInit {

  @ViewChild('content', {static: false}) content: ElementRef;

  title = 'ProyectoImdera';
  BarChart: any;
  PieChart: any;
 


  createFormGroup() {
    return new FormGroup({
      lugar: new FormControl('', Validators.required),
      organizacion: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      comuna: new FormControl('', Validators.required),
      ceroACinco: new FormControl('', [Validators.required, Validators.min(0)]),
      seisADoce: new FormControl('', [Validators.required, Validators.min(0)]),
      treceADiecisiete: new FormControl('', [Validators.required, Validators.min(0)]),
      dieciochoAVentiocho: new FormControl('', [Validators.required, Validators.min(0)]),
      ventiochoAMas: new FormControl('', [Validators.required, Validators.min(0)]),
      descripcion: new FormControl('', Validators.required)
    })
  }

  evento: FormGroup;

  constructor() {
    this.evento = this.createFormGroup();
  }

  ngOnInit() {

    
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# de votos',
          data: [9, 7, 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,64,0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,64,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  onResetForm() {
    this.evento.reset();
  }
  register() {
    if (this.evento.valid) {
      console.log(this.evento.value);
    } else {
      console.log("Campos mal validados");
    }
    this.onResetForm();
  }

  ngAfterViewInit() {

    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["New", "In Progress", "On Hold", "Accepted", "Rejected"],
        datasets: [{
          label: '# de votos',
          data: [150, 200, 300, 400, 700],
          backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(255,175,96,1)',
            'rgba(255,145,186,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Pie Chart",
          display: true
        },
        responsive: true,
        display: true,
      }
    });

  }


downloadPDF(){


  let doc= new jsPDF();
  
  let specialElementHandlers = {
    '#editor': function(element,renderer){
      return true;
    }
  };

let content = this.content.nativeElement;

doc.fromHTML(content.innerHTML,15,15,{
  'width':100,
  'elementHandlers':specialElementHandlers
});

doc.save('Reporte.pdf');

  
}

generatePDF(){
  html2canvas(document.querySelector('content'), {scale: 1}).then(canvas => {
    const orientation = (screen.orientation || {}).type;
    let pdf;
    if( orientation.indexOf('portrait') >= 0) {
        pdf = new jsPDF('p', 'pt', [canvas.width,canvas.height]);
    }else {
        pdf = new jsPDF('l', 'pt', [canvas.width,canvas.height]);
    }
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width,canvas.height);
    pdf.save('Reporte.pdf'); //-> download pdf file
});
}


}
