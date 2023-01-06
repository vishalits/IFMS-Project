import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-self-service',
  templateUrl: './employee-self-service.component.html',
  styleUrls: ['./employee-self-service.component.css']
})
export class EmployeeSelfServiceComponent implements OnInit {

  EmpSelfDetailForm !: FormGroup;

  BloodGroupdata: any = [];
  Genderdata: any = [];
  CasteCategoryData: any = [];
  DisabilityTypeData: any = [];
  MaritalStatusData: any = [];
  empdataAPI:any=[];
  empdata: any = {};
  empselfData: any = [];
    rid: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.EmpSelfDetailForm = this.formbuilder.group({
      Name:['',Validators.required],
      fatherName:['',Validators.required],
      motherName:['',Validators.required],
      dob:['',Validators.required],
      mobileNumber:['',Validators.required],
      spouseName:['',Validators.required],
      percentageDisability:['',Validators.required],
      height:['',Validators.required],
      identificationMark:['',Validators.required],
      Gender_Data: ['-1', Validators.required],
      Blood_Group:['-1', Validators.required],
      Social_Category:['-1', Validators.required],
      Marital_Status:['-1', Validators.required],
      Disability_Type:['-1', Validators.required],
      panNo:['',Validators.required],
      emailID:['',Validators.required],
      disable:['',Validators.required]
    });
    this.getBloodGroup();
    this.getGender();
    this.getCasteCategory();
    this.getDisabilityType();
    this.getMaritalStatus();
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
  getGender(): void {

    this.apiService.getGender().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Genderdata = res.data
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

  getCasteCategory(): void {

    this.apiService.getCasteCategory().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.CasteCategoryData = res.data
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

  getDisabilityType(): void {

    this.apiService.getDisabilityType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
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
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

  getMaritalStatus(): void {

    this.apiService.getMaritalStatus().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.MaritalStatusData = res.data
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
  getempData():void{
    var Empid = $('#Empid').val();
    if(Empid){
    this.apiService.getEmployeeDetail(Empid).subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.empdata = res.data
          // console.log(this.empdata)
          this.EmpSelfDetailForm.patchValue({
            Name: this.empdata.NAME_EN,
            fatherName: this.empdata.FATHER_NAME,
            motherName: this.empdata.MOTHER_NAME,
            dob: this.empdata.DATE_OF_BIRTH,
            mobileNumber: this.empdata.MOB_NO,
            spouseName: this.empdata.SPOUSENAME,
            percentageDisability: this.empdata.DISABILITY_PERCENT,
            height: this.empdata.HEIGHT,
            identificationMark: this.empdata.IDENTIFICATION_MARKS,
            Gender_Data: this.empdata.GEN_ID,
            Blood_Group: this.empdata.B_GROUP_ID,
            Social_Category: -1,
            Marital_Status: this.empdata.M_STATUS_ID,
            Disability_Type: this.empdata.DISABILITY_ID,
          });
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
        alert("Invalid Employee ID")
        $('#Empid').val('');
      }
    })
  }
  else{
    alert('Please Enter Employee Id')
  }
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    alert(this.EmpSelfDetailForm.valid)
    if (this.EmpSelfDetailForm.invalid) {
    let rdata=  {
      "name": this.EmpSelfDetailForm.controls["Name"].value,
      "fatherName": this.EmpSelfDetailForm.controls["fatherName"].value,
      "motherName": this.EmpSelfDetailForm.controls["motherName"].value,
      "gender": this.EmpSelfDetailForm.controls["Gender_Data"].value,
      "dob": this.EmpSelfDetailForm.controls["dob"].value,
      "socialCategory": this.EmpSelfDetailForm.controls["Social_Category"].value,
      "mobileNumber": this.EmpSelfDetailForm.controls["mobileNumber"].value,
      "maritalStatus": this.EmpSelfDetailForm.controls["Marital_Status"].value,
      "spouseName": this.EmpSelfDetailForm.controls["spouseName"].value,
      "disable": "0",
      "disabilityType":this.EmpSelfDetailForm.controls["Disability_Type"].value,
      "percentageDisability": this.EmpSelfDetailForm.controls["percentageDisability"].value,
      "height": this.EmpSelfDetailForm.controls["height"].value,
      "bloodGroup": this.EmpSelfDetailForm.controls["Blood_Group"].value,
      "identificationMark": this.EmpSelfDetailForm.controls["identificationMark"].value,
      "panNo": this.EmpSelfDetailForm.controls["panNo"].value,
      "emailId": this.EmpSelfDetailForm.controls["emailID"].value,
      "createdBy": 1,
      "officeId": 2,
      "requesterId": 3,
      "essSubRequestTypeId": 1,
      "remarks": "try",
      "requestTypeId": 1,
      "approverId": 1,
      "reasonType":1
      
  }
    // console.log(data);
    this.apiService.SubmitEntitySave(rdata).subscribe({
      next: (res) => {
        if (res.status = 200) {
          // alert("Save As Draft Successfully");

          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)
          // this.EmpSelfDetailForm
          // .reset();
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert(errorObj.message)
      }

    })
    }
    else {
      alert("form is invalid");
    }
  }
  
}
