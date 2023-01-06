import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { minLength } from '@rxweb/reactive-form-validators';
import { get } from 'jquery';
@Component({
  selector: 'app-employee-identification',
  templateUrl: './employee-identification.component.html',
  styleUrls: ['./employee-identification.component.css']
})
export class EmployeeIdentificationComponent implements OnInit {
  EmployeeIdentification!: FormGroup;
  essEmpIdentificationNumberSavedata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.EmployeeIdentification = this.formbuilder.group({
      addharRef : ['', Validators.required],
      PassportNo : ['',  Validators.required],
      pancardNo : ['', Validators.required]

    })

  }
  submitted = false;
  onSubmit() {
    this.submitted = true;

    let data = {
      "aadhaarRefNo": this.EmployeeIdentification.controls["addharRef"].value,
      "passportNo": this.EmployeeIdentification.controls["PassportNo"].value,
      "pan": this.EmployeeIdentification.controls["pancardNo"].value,
      // "aadhaarRefNo":"sdfste5367153",
      // "passportNo":"hih66dd8682",
      // "pan":"pdt1213g"
      }
      // getServiceCategoryg
      this.apiService.essEmpIdentificationNumberSave(data).subscribe(res => {
        if (res.data.status = 200) {
          this.essEmpIdentificationNumberSavedata = res.data
        }
     
        console.log(this.essEmpIdentificationNumberSavedata)
      })
    
  }



  


  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
