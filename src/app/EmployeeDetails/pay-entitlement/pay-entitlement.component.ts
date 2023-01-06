import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-pay-entitlement',
  templateUrl: './pay-entitlement.component.html',
  styleUrls: ['./pay-entitlement.component.css']
})
export class PayEntitlementComponent implements OnInit {
  PayEntitlement!: FormGroup;
  HRAData: any;
  DAdata: any;
  PayCommisiondata: any;
  Designationdata: any;
 
 

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.PayEntitlement = this.formbuilder.group({
      service_Category: ['-1',Validators.required],
      serviceSub_Category: ['-1',Validators.required],
      Designation: ['-1',Validators.required],
      Commission: ['-1',Validators.required],
      Darate: ['-1',Validators.required],
      HRAData: ['1',Validators.required]
    })
  
    this.getServiceCategory();
   
  }
  getServiceCategoryeData:any=[];

  SubServiceCategorydata:any=[];



  getSubServiceCategory(event: any) {
    // alert(event.target.value)
    let requestedData = {
      serviceCategoryId: event.target.value
    }

    
    this.apiService.getSubServiceCategory(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.SubServiceCategorydata = res.data
      }
      console.log(this.SubServiceCategorydata)
    })

  }


   //get getServiceCategorye
   getServiceCategory(): void {

    this.apiService.getServiceCategoryg().subscribe({

      next: (res) => {
        // var getServiceCategoryJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.getServiceCategoryeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
   
      }
    })


        
   // getDesignation
   this.apiService.getDesignation().subscribe(res => {
    if (res.data.status = 200) {
      this.Designationdata = res.data
    }
    console.log(this.Designationdata)
  })

  // getPayCommision

  this.apiService.getPayCommision().subscribe(res => {
    if (res.data.status = 200) {
      this.PayCommisiondata = res.data
    }
    console.log(this.PayCommisiondata)
  })
  

    // getDaRate
    this.apiService.getDaRate().subscribe({

      next: (res) => {
        // var DcocumentJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DAdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }
    })
  

// ///// getHra
    this.apiService.getHra().subscribe({

      next: (res) => {
        // var DcocumentJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.HRAData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
      }
    })
  
  
  
    }
    ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname])
     }
  }
 