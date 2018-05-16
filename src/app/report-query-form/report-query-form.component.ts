import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductServices } from "../services";
import { ModelReportList } from "../Modal/ModelReportList";

@Component({
  selector: 'app-report-query-form',
  templateUrl: './report-query-form.component.html',
  styleUrls: ['./report-query-form.component.css']
})
export class ReportQueryFormComponent implements OnInit {
  
  reportTitle : string;
  modalReportList:ModelReportList[];
  id :number;
  product_error:boolean;

  constructor(private router:Router, private route:ActivatedRoute, private location:Location,private svc:ProductServices) { }

  ngOnInit() {


      this.id = +this.route.snapshot.paramMap.get('id');
      
      //alert(this.id);

     //   this.svc.getReportById(this.id).subscribe(
     //     data=>{this.modalReportList=data},
     //     err=>{this.product_error=true;}
     //   )   

        this.reportTitle = localStorage.getItem('reportTitle');
    }

  goBack():void{
    this.router.navigateByUrl('/selectedReport/'+this.id);
  }
}
