import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-acc-no',
  templateUrl: './bank-acc-no.component.html',
  styleUrls: ['./bank-acc-no.component.css']
})
export class BankAccNoComponent implements OnInit {
 
  Statedata:any=[];
  BankData: any = [];
  BankBranchData: any = [];
  updateBank !: FormGroup;
  empselfData: any = [];
    rid: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.apiService.getState().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
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
        // alert("error while fatching data from get MaritalStatus ");
        // console.log("error from get MaritalStatus api is ", errorObj);
        // console.log("error from get MaritalStatus api is ", err);
        // alert(err.error.message)
      }
    })
    this.apiService.getBank().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.BankData = res.data
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
    this.updateBank = this.formbuilder.group({
      accountNumber:['',Validators.required],
      state:['-1',Validators.required],
      district:['-1',Validators.required],
      bank:['-1',Validators.required],
      branch:['-1',Validators.required],
    });
  }
  Districtdata:any=[];
  getDistrict(state:string){
    // this.state=state;
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
   getBankBranch(bankid:any):void{
    let requestedData = {
      iBankId: bankid.target.value
    }
    this.apiService.getBankBranch(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.BankBranchData = res.data
      }
    })
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.updateBank.valid) {
    let rdata=  {
      "accountNumber": this.updateBank.controls["accountNumber"].value,
      "state": this.updateBank.controls["state"].value,
      "district": this.updateBank.controls["district"].value,
      "bank": this.updateBank.controls["bank"].value,
      "branch": this.updateBank.controls["branch"].value,
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
    this.apiService.essBankAccountChangeRequest(rdata).subscribe({
      next: (res) => {
        if (res.status = 200) {
          // alert("Save As Draft Successfully");

          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)
          this.updateBank.reset();
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
