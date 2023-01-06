import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  essEmployeeAddressSavedata: any;
  saveAddress! : FormGroup;
  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.getState();
    this.saveAddress = this.formbuilder.group({
      State : ['-1',Validators.required],
      District : ['-1',Validators.required],
      Rural : ['',Validators.required],
      Urban : ['-1',Validators.required],
      BlockMuncipal : ['-1',Validators.required],
      PanchayatWard : ['-1',Validators.required],
   })
  }


  Statedata:any=[];
  area:string = ''; 
  state:string='';
  district:string='';


  getState(): void{


    this.apiService.getState().subscribe({
      next: (res) => {
        if (res.status = 200) {
          this.Statedata = res.data
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


  Districtdata:any=[];
  getDistrict(state:string){
    this.state=state;


    this.apiService.getDistrict(state).subscribe({
      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Districtdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get MaritalStatus ");
        // console.log("error from get MaritalStatus api is ", errorObj);
        // console.log("error from get MaritalStatus api is ", err);
        // alert(err.error.message)
      }
    })

   }
   BlockCitydata:any=[];
   onItemChange(event:any){
     this.area = event.target.value;
    let districtCd = $('#districtCd').val();

    let requestedData = {
      "idistrictId":districtCd,
      "istateId":  this.state
      }

   

      this.apiService.getBlockMunicipal(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.BlockCitydata = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get MaritalStatus ");
          // console.log("error from get MaritalStatus api is ", errorObj);
          // console.log("error from get MaritalStatus api is ", err);
          // alert(err.error.message)
        }
      })
   }
   PanchayatWardata:any=[];
   getPanchayatWard(event:any){
    let bmId = event.target.value;
    // let BlockCity = $('#BlockCitydata').val();
    let districtCd = $('#districtCd').val();

    let requestedData = {
      "imunPId":bmId,
      "istateId":this.state,
      "idistrictId":districtCd,
    }
      this.apiService.getPanchayatWard(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.PanchayatWardata = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get MaritalStatus ");
          // console.log("error from get MaritalStatus api is ", errorObj);
          // console.log("error from get MaritalStatus api is ", err);
          // alert(err.error.message)
        }
      })
   }
   Villagedata:any=[];
   getVillage(event:any){
    let gpId = event.target.value;
    // let BlockCity = $('#BlockCitydata').val();
    let requestedData = {
      "gpId":gpId,
      }
      alert ('hello')
      this.apiService.getWard(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.Villagedata = res.data
            console.log(this.Villagedata)
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get MaritalStatus ");
          // console.log("error from get MaritalStatus api is ", errorObj);
          // console.log("error from get MaritalStatus api is ", err);
          // alert(err.error.message)
        }
      })
   }
   Assemblydata:any=[];
   getAssembly(disId:string){
     this.apiService.getWard(disId).subscribe({

       next: (res) => {
         // var MaritalStatusJson = JSON.parse(res.data);
         // var statusJson = JSON.parse(res.status);
         if (res.status = 200) {
           this.Assemblydata = res.data
         }
       },
       error: (err) => {
         let errorObj = {
           message: err.message,
           err: err,
           response: err
         }
         // alert("error while fatching data from get MaritalStatus ");
         // console.log("error from get MaritalStatus api is ", errorObj);
         // console.log("error from get MaritalStatus api is ", err);
         // alert(err.error.message)
       }
     })
    }

    OnSubmit(){
      let data ={
        "pstate":this.saveAddress.controls["State"].value,
        "pdistrict": "ty",
        "parea": 3,
        "pblock": 4,
        "pvillage": "drd",
        "phouseNo": "hg5",
        "ppincode": "345",
        "passembly": "567",
        "cstate": "raj",
        "cdistrict": "tyu",
        "carea": 6,
        "cblock": 7,
        "cvillage": "ghj",
        "chouseNo": "rgf",
        "cpincode": "567",
        "cassembly": "654",
        "requestId": 4,
        "officeId": 6,
        "createdBy": 1
        }

            
     // getServiceCategoryg
     this.apiService.essEmployeeAddressSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmployeeAddressSavedata = res.data
      }
   
      console.log(this.essEmployeeAddressSavedata)
    })
      
     }
    ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname])
     }
  
}
