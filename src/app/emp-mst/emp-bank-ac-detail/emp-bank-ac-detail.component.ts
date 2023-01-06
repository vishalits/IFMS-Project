import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-bank-ac-detail',
  templateUrl: './emp-bank-ac-detail.component.html',
  styleUrls: ['./emp-bank-ac-detail.component.css']
})
export class EmpBankAcDetailComponent implements OnInit {
  BankData: any = [];
  BankBranchData: any = [];
  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
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
  }
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname]);
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
}
