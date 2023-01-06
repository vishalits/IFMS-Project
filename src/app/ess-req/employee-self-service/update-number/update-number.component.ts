import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-number',
  templateUrl: './update-number.component.html',
  styleUrls: ['./update-number.component.css']
})
export class UpdateNumberComponent implements OnInit {
  updateNumber !: FormGroup;
  empselfData: any = [];
  rid: any;
  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {

    this.updateNumber = this.formbuilder.group({
      employeeName: new FormControl("", Validators.required),
      beltNo: new FormControl("", Validators.required),
      siPolicyNo: new FormControl("", Validators.required),
      cpfNo: new FormControl("", Validators.required),
      cpenfNo: new FormControl("", Validators.required),
      mobileNo: new FormControl("", Validators.required),
      parnNo: new FormControl("", Validators.required),
      pilNo: new FormControl("", Validators.required),
      lascpenfNo: new FormControl("", Validators.required),
    });  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.updateNumber.valid) {
    
      let data ={  
          "employeeName": this.updateNumber.controls["employeeName"].value,
          "beltNo":this.updateNumber.controls["beltNo"].value,
           "cpfNo":this.updateNumber.controls["cpfNo"].value,
           "cpenfNo":this.updateNumber.controls["cpenfNo"].value,
           "mobileNo":this.updateNumber.controls["mobileNo"].value,
           "parnNo":this.updateNumber.controls["parnNo"].value,
           "pilNo":this.updateNumber.controls["pilNo"].value,
           "lascpenfNo":this.updateNumber.controls["lascpenfNo"].value,
          "siPolicyNo":this.updateNumber.controls["siPolicyNo"].value,
           "createdBy": 1,
           "officeId": 2,
           "requesterId": 3,
           "essSubRequestTypeId": 1,
           "remarks": "try",
           "requestTypeId": 1,
           "approverId": 1,
           "reasonType":1
      }
    this.apiService.essUpdateOtherNumber(data).subscribe({
      next: (res) => {
        if (res.status = 200) {

          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)
          this.updateNumber.reset();
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
    else {
      alert("form is invalid");
    }
  }
}
