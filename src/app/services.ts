import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Product } from "../app/Modal/reportJsonFormat";


@Injectable()
export class ProductServices {
  data:any;
  loading:boolean;
  UrlString:any;
  
  constructor(public http: Http) {
  }

  getReportList(){
     
        this.loading = true;
        return this.http.request('https://globalmarketforecast.000webhostapp.com/getData.php')
                .map((res:Response)=> res.json());               
              }

  getCategoryList(){
     
    this.loading = true;
    return this.http.request('https://globalmarketforecast.000webhostapp.com/getCategoryList.php')
    .map((res:Response)=> res.json());               
 }



    getproductsById(id:any){ 
          this.loading = true;
          this.UrlString = 'https://e-commerce-apis.herokuapp.com/api/products/'+id;
        //  alert(this.UrlString);

          return this.http.request(this.UrlString)
                  .map((res:Response)=> res.json());              

        }
           
        getReportById(id:any){ 
          this.loading = true;
          this.UrlString = 'https://globalmarketforecast.000webhostapp.com/getDataById.php?id='+id;
        //  alert(this.UrlString);

          return this.http.request(this.UrlString)
                  .map((res:Response)=> res.json());              

        }
         

}
