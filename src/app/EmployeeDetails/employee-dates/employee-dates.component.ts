import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-dates',
  templateUrl: './employee-dates.component.html',
  styleUrls: ['./employee-dates.component.css']
})
export class EmployeeDatesComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
  }
  maxDate = new Date();
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
