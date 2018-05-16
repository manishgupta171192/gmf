import { Component, OnInit, ReflectiveInjector} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Product } from "../Modal/reportJsonFormat";
import { ProductServices } from "../services";
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ModelReportList } from "../Modal/ModelReportList";

@Component({
  selector: 'app-reportlistcontainer',
  templateUrl: './reportlistcontainer.component.html',
  styleUrls: ['./reportlistcontainer.component.css']
})
export class ReportlistcontainerComponent implements OnInit {
 
  public product_error:boolean=false;
  modelReportList:ModelReportList[];
  decodeURIString : string;
  query:string;
 
 constructor( private router:Router,private svc:ProductServices,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
  
  
  ngOnInit() {
    this.svc.getReportList().subscribe(
       data=>{this.modelReportList=data},
       err=>{this.product_error=true;}
     )
    } 

   setDescriptionForSelectedReport(desc : string){
  
    this.router.navigate['/reportlistcontainer'];

     localStorage.setItem("Desc",desc);

   }
    
   getdecodedTitle(title : string){

      this.decodeURIString =  decodeURI(title);
      var replaced = title.replace(" ", "-");
      title.replace(/%20/g, " ");
      alert(replaced);
    
   }
 
    

}
