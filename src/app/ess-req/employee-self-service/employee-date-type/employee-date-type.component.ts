import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-date-type',
  templateUrl: './employee-date-type.component.html',
  styleUrls: ['./employee-date-type.component.css']
})
export class EmployeeDateTypeComponent implements OnInit {
  DateType: any = [];
  updatedate !: FormGroup;
  empselfData: any = [];
    rid: any;
    file!: File;
  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.updatedate = this.formbuilder.group({
      type: new FormControl("-1", Validators.required),
      date: new FormControl("", Validators.required),
      file: new FormControl("", Validators.required),
    });
    this.getDateType();
  }
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
   //get Date Type
   getDateType(): void {

    this.apiService.getDateType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DateType = res.data
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
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.updatedate.valid) {
      let SaveDocumentFile = new FormData();
      SaveDocumentFile.append("file", this.file);
      SaveDocumentFile.append("type", this.updatedate.controls["type"].value);
      SaveDocumentFile.append("date", this.updatedate.controls["date"].value,);
      SaveDocumentFile.append("createdBy", "1");
      SaveDocumentFile.append("officeId","2");
      SaveDocumentFile.append("requesterId", "1");
      SaveDocumentFile.append("essSubRequestTypeId",  "1");
      SaveDocumentFile.append("remarks", "try");
      SaveDocumentFile.append("requestTypeId", "1");
      SaveDocumentFile.append("approverId", "1");
      SaveDocumentFile.append("reasonType", "1");

    this.apiService.essUpdateEmployeeDate(SaveDocumentFile).subscribe({
      next: (res) => {
        if (res.status = 200) {

          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)
          this.updatedate.reset();

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
