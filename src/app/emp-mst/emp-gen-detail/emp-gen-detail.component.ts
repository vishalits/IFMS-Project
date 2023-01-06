import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-emp-gen-detail',
  templateUrl: './emp-gen-detail.component.html',
  styleUrls: ['./emp-gen-detail.component.css']
})
export class EmpGenDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeBtn(btname:any):void{
    $('.btnclr').addClass('btn btn-warning')
    $('#'+btname).removeClass('btn btn-warning');
  }
}
