import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-emp-date',
  templateUrl: './emp-date.component.html',
  styleUrls: ['./emp-date.component.css']
})
export class EmpDateComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
  }
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname]);
  }
}
