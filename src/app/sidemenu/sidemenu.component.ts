import { Component, OnInit, ReflectiveInjector} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ProductServices } from "../services";
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ModelCategoryList } from "../Modal/ModelCategoryList";


import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  public product_error:boolean=false;
  modelCategoryList:ModelCategoryList[];
  
  query:string;
 
 constructor( private router:Router,private svc:ProductServices,
     private route:ActivatedRoute) {
     this.route.queryParams.subscribe(params => {this.query = params['query']||'';});
  }
  
  ngOnInit() {
    this.svc.getCategoryList().subscribe(
       data=>{this.modelCategoryList=data},
       err=>{this.product_error=true;}
     )
    } 
}
