import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ess-req',
  templateUrl: './ess-req.component.html',
  styleUrls: ['./ess-req.component.css']
})
export class ESSReqComponent implements OnInit {

  ESSRequestData: any = [];
  SubReqdata:any=[];
  ESSurl:any=[];
  subreq:string = '';

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {

    this.getESSRequestType();
  }

  //get Request Type
  getESSRequestType(): void {

    this.apiService.getESSRequestType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.ESSRequestData = res.data
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

  // Sub Request Type

  
  getESSSubRequestType(event:any){
     this.subreq = event.target.value;
    let requestedData = {
      "inEssRqstTypeId": this.subreq,
      }
      this.apiService.getESSSubRequestType(requestedData).subscribe({

        next: (res) => {
          // var MaritalStatusJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.SubReqdata = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            status:400,
            message: err.message,
            err: err,
            response: err
          }
          alert("Data Not Found");
          // console.log("error from get MaritalStatus api is ", errorObj);
          // console.log("error from get MaritalStatus api is ", err);
          // alert(err.error.message)
        }
      })

}

// Link the sub request item to related component 

loadComponent(): void {
  var subcomponent = $('#subreqID').val();
  let urlData = {

    "iessSubRqstTypeId": subcomponent,
    "iessRqstTypeId": this.subreq
  }
  this.apiService.getESSUrl(urlData).subscribe({

    next: (res) => {
      // var MaritalStatusJson = JSON.parse(res.data);
      // var statusJson = JSON.parse(res.status);
      if (res.status = 200) {
        this.ESSurl = res.data[0].url;
        this.router.navigateByUrl(this.ESSurl)
        // window.location.href = this.ESSurl;
      }
    },
    error: (err) => {
      let errorObj = {
        status: 400,
        message: err.message,
        err: err,
        response: err
      }
      alert("Data Not Found");

      // console.log("error from get MaritalStatus api is ", errorObj);
      // console.log("error from get MaritalStatus api is ", err);
      // alert(err.error.message)
    }
  })


  //   switch (subcomponent) {

  //     case "1":
  //         this.router.navigateByUrl('/employee-self-service')
  //         break;
  //     case "3":
  //           this.router.navigateByUrl('/employee-nominee-update')
  //           break;
  //     case "4":
  //       this.router.navigateByUrl('/bank-acc-number')
  //         break;

  //     default:
  //         console.log("No such day exists!");
  //         break;
  // }


}
}
