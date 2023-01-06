import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-mst',
  templateUrl: './emp-mst.component.html',
  styleUrls: ['./emp-mst.component.css']
})
export class EmpMstComponent implements OnInit {
  EmpPersonalDetailForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }


  ngOnInit(): void {
    this.EmpPersonalDetailForm = this.formbuilder.group({
      name: ['', Validators.required],
      GEN_ID: ['-1', [Validators.required]],
      height: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['-1', Validators.required],
      date: ['', Validators.required],
      word: ['', Validators.required],
      M_STATUS_ID: ['-1', Validators.required],
      Identification: ['', Validators.required],
      Blood_Group: ['-1', Validators.required],
      SRVC_CAT:['-1', Validators.required],
      CATEGORY_ID:['-1', Validators.required],
      employeeType:['-1',Validators.required],
      service_Category:['-1',Validators.required]
    });
    this.getMaritalStatus();
    this.getBloodGroup();
    this.getGender();
    this.getDisabilityType();
    this.getServiceCategory();
    // this.getPayeeType();
    this.getServiceSubCategory();
    this.getServiceQuota();
    this.getDesignation();
    this.getDepartment();
    this.getCasteCategory();
    this.apiService.getEmployeeType().subscribe(res => {
      if (res.data.status = 200) {
        this.EmployeeTypedata = res.data
      }
    })
  }
  EmployeeTypedata: any = [];
  MaritalStatusdata: any = [];
  BloodGroupdata: any = [];
  GenderData: any = [];
  DisabilityTypeData: any = [];
  getServiceCategoryeData:any=[];
  getPayeeTypeData:any=[];
  getServiceSubCategoryData:any=[];
  getServiceQuotaData:any=[];
  getDesignationData:any=[];
  getDepartmentData:any=[];
  getCasteCategoryData:any=[];
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
  //get Matrital Status
  getMaritalStatus(): void {

    this.apiService.getMaritalStatus().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.MaritalStatusdata = res.data
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
  //get Blood Group
  getBloodGroup(): void {

    this.apiService.getBloodGroup().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.BloodGroupdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }
  //get Gender
  getGender(): void {

    this.apiService.getGender().subscribe({

      next: (res) => {
        // var genderJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
         
          this.GenderData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Gender ");
        // console.log("error from get Gender api is ", errorObj);
        // console.log("error from get Gender api is ", err);
        // alert(err.error.message)
      }
    })
  }
  //get DisabilityType
  getDisabilityType(): void {

    this.apiService.getDisabilityType().subscribe({

      next: (res) => {
        // var DisabilityTypeJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DisabilityTypeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Disability Type ");
        // console.log("error from get Disability Type api is ", errorObj);
        // console.log("error from get Disability Type api is ", err);
        // alert(err.error.message)
      }
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
        // alert("error while fatching data from get Disability Type ");
        // console.log("error from get Disability Type api is ", errorObj);
        // console.log("error from get Disability Type api is ", err);
        // alert(err.error.message)
      }
    })
  }
    //get getServiceSubCategory
    getServiceSubCategory(): void {

      this.apiService.getServiceSubCategory().subscribe({
  
        next: (res) => {
          // var getServiceSubCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceSubCategoryData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          // alert(err.error.message)
        }
      })
    }

    
    
    //get Service Quota
    getServiceQuota():void{
      this.apiService.getServiceQuota().subscribe({
  
        next: (res) => {
          // var getServiceQuotaJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceQuotaData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          // alert(err.error.message)
        }
      })
    }
     //get Service Quota
     getDesignation():void{
      this.apiService.getDesignation().subscribe({
  
        next: (res) => {
          // var getDesignationJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getDesignationData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          // alert(err.error.message)
        }
      })
    }
     //getDepartment
     getDepartment():void{
      this.apiService.getDepartment().subscribe({
  
        next: (res) => {
          // var getDepartmentJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getDepartmentData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);

          // alert(err.error.message)
        }
      })
    }
    //getCasteCategory
    getCasteCategory():void{
      this.apiService.getCasteCategory().subscribe({
  
        next: (res) => {
          // var getCasteCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getCasteCategoryData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);

          // alert(err.error.message)
        }
      })
    }
    JanaadhaarData: any[] = [];

    GetJanaadhaarData(janaadhaar :any):void{
      let requestedData: any = { "janaadhaar": janaadhaar }
      this.apiService.GetJanaadhaarData(requestedData).subscribe({

        next: (res) => {
         
          let data = Object.values(res);
          for (let i = 0; i < data[1].length; i++) {
            this.JanaadhaarData.push(data);
          }
          console.log(this.JanaadhaarData[0][0].status);
          // var getServiceSubCategoryJson = JSON.parse(res);
          // var statusJson = JSON.parse(res.status);
          // if (statusJson = 200) {
          //   this.getServiceSubCategoryData = getServiceSubCategoryJson
          // }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          alert(err.error.message)
        }
      })
    }
  
}
