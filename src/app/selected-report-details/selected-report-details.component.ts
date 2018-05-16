import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductServices } from "../services";
import { Product } from "../Modal/reportJsonFormat";
import { ModelReportList } from "../Modal/ModelReportList";


@Component({
  selector: 'app-selected-report-details',
  templateUrl: './selected-report-details.component.html',
  styleUrls: ['./selected-report-details.component.css']
})
export class SelectedReportDetailsComponent implements OnInit {
  
  getDesc :string;
  reportById : ModelReportList[];
  productById:Product[];
  id :number;
  name :string;
  product_error:boolean;

  constructor(private router:Router, private route:ActivatedRoute, private location:Location,private svc:ProductServices) { }

  ngOnInit() {

    // + sign is used to convert string to number
    this.id = +this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');

      //  this.svc.getproductsById(this.id).subscribe(
     // data=>{this.reportById=data},
    //  err=>{this.product_error=true;}
    //  )
    this.svc.getReportById(this.id).subscribe(
        data=>{ this.reportById =data
        console.log(JSON.stringify(data))
       // this.setDescriptionForNextPage(data)
      },
        (err)=>{ this.product_error=true; }
      ) 
  }

      setTitleForQueryForm(desc :string){
         localStorage.setItem('reportTitle', desc);
        
      }
    
  goBack():void{
    this.location.back();
  }
}
