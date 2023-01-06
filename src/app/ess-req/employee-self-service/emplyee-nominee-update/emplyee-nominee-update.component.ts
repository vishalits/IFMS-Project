import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-emplyee-nominee-update',
  templateUrl: './emplyee-nominee-update.component.html',
  styleUrls: ['./emplyee-nominee-update.component.css']
})
export class EmplyeeNomineeUpdateComponent implements OnInit {
  FamilyRelation: any = [];
  GetSchemeData: any = [];
  file!: File;
  updateNominee !: FormGroup;
  empselfData: any = [];
  rid: any;
  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.updateNominee = this.formbuilder.group({
      schemeName: new FormControl("-1", Validators.required),
      nominationName: new FormControl("-1", Validators.required),
      relationName: new FormControl("-1", Validators.required),
      percentShare: new FormControl("", Validators.required),
      file: new FormControl("", Validators.required),
    });
    this.getFamilyRelation();
    this.getSchemeType();

  }
  //get Family Relation
  getFamilyRelation(): void {

    this.apiService.getFamilyRelation().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.FamilyRelation = res.data
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

  getSchemeType(): void {

    this.apiService.getSchemeType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.GetSchemeData = res.data
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
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.updateNominee.valid) {
      let SaveDocumentFile = new FormData();
      SaveDocumentFile.append("file", this.file);
      SaveDocumentFile.append("schemeName", this.updateNominee.controls["schemeName"].value);
      SaveDocumentFile.append("nominationName", this.updateNominee.controls["nominationName"].value,);
      SaveDocumentFile.append("relationName", this.updateNominee.controls["relationName"].value,);
      SaveDocumentFile.append("percentShare", this.updateNominee.controls["percentShare"].value,);
      SaveDocumentFile.append("createdBy", "1");
      SaveDocumentFile.append("officeId","2");
      SaveDocumentFile.append("requesterId", "1");
      SaveDocumentFile.append("essSubRequestTypeId",  "1");
      SaveDocumentFile.append("remarks", "try");
      SaveDocumentFile.append("requestTypeId", "1");
      SaveDocumentFile.append("approverId", "1");
      SaveDocumentFile.append("reasonType", "1");

    this.apiService.essEmployeeNomineeUpdate(SaveDocumentFile).subscribe({
      next: (res) => {
        if (res.status = 200) {

          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid)
          this.updateNominee.reset();

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
