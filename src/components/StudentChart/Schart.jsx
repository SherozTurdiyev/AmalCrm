import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button } from 'antd';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



class Schart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [60, 24, 2, 1, 9],
      options: {
        chart: {
          width: 580,
          type: 'donut',
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true
                }
              }
            }
          }
        },
        labels: ["FrontEnd", "Backend", "UI / UX design", "Mobile(React Native)", "Mobile(Flutter)"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        states: {
          hover: {
            filter: 'none'
          }
        },
        theme: {
          palette: 'palette2'
        },
        // title: {
        //   text: "O’quvchilar kesimi"
        // },
        responsive: [{
          breakpoint: 1300,
          options: {
            chart: {
              width: 705
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

      
    };
    this.run =this.run.bind(this)
    
  }
  run() {
    const input = document.getElementById("run");
    const pdf = new jsPDF({ unit: "px", format: "letter", userUnit: "px" });
    pdf.html(input, { html2canvas: { scale: 0.57 } }).then(() => {
      pdf.save("test.pdf");
    });
  }
// 

  render() {
    return (
      <div id='run'>
        <div className='flex justify-between'>
          <div>
            <Button className='mx-2'>2023</Button>
            <Button className='mx-2'>Filiallar kesimida</Button>
            <Button  style={{ backgroundColor: "#4D44B5" }} className='text-light'>Kurslar kesimida</Button>
          </div>
          <Button onClick={this.run}>PDF yuklab olish</Button>
        </div>
        <div id='chart' className='mt-5' >
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
        </div>
      </div>
    );
  }
}

export default Schart;
