import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-emp-family-detail',
  templateUrl: './emp-family-detail.component.html',
  styleUrls: ['./emp-family-detail.component.css']
})
export class EmpFamilyDetailComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }
  MaritalStatusdata: any = [];
  GenderData: any = [];
  FamilyData: any = [];
  
  ngOnInit(): void {
    
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


    this.apiService.getFamilyRelation().subscribe({

      next: (res) => {
        // var genderJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
         
          this.FamilyData = res.data
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
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname]);
  }
}
