import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  FamilyDetails: any;
  Genderdata: any;
  MaritalStatusdata: any;
  FamilyRelationdata: any;
  SchemeTypedata: any;
 

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
     this.FamilyDetails = this.formbuilder.group({
      name: ['', Validators.required]
     })


     //////////// getGender

   this.apiService.getGender().subscribe(res => {
    if (res.data.status = 200) {
      this.Genderdata = res.data
    }
    console.log(this.Genderdata)
  })

     //////////// getMaritalStatus

     this.apiService.getMaritalStatus().subscribe(res => {
      if (res.data.status = 200) {
        this.MaritalStatusdata = res.data
      }
      console.log(this.MaritalStatusdata)
    })




     //////////// getFamilyRelation

     this.apiService.getFamilyRelation().subscribe(res => {
      if (res.data.status = 200) {
        this.FamilyRelationdata = res.data
      }
      console.log(this.FamilyRelationdata)
    })

      //////////// getFamilyRelation

      this.apiService.getSchemeType().subscribe(res => {
        if (res.data.status = 200) {
          this.SchemeTypedata = res.data
        }
        console.log(this.SchemeTypedata)
      })


    

  }
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
