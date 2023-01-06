import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  Tiledata:any=[];

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    $('#ess').hide();
    $('#master').hide();
    $('#billProcess').hide();
    $('#Sanction').hide();
    this.apiService.getTileUrl("2").subscribe({

      next: (res) => {
        if (res.status = 200) {
          this.Tiledata = res.data
          for (let index = 0; index < res.data.length; index++) {
            var TILEID = res.data[index].TILEID;
            switch (TILEID) {
              case 1:
                $('#ess').show();

                break;
                case 2:
                  $('#master').show();

                  break;
                case 3:
                  $('#billProcess').show();
                    break;
                case 4:
                  $('#Sanction').show();
                  break;    
              default:
                break;
            }
        }
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

}
