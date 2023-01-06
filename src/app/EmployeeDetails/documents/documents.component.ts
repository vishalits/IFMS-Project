import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  EmpDocument: any;
  DocumentTypedata: any;
  essEmpDocumentSavedata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {

    this.EmpDocument = this.formbuilder.group({
      Description: ['', Validators.required],
      documennt: ['-1',Validators.required],
      file : ['',Validators.required]

    })

    
  //////////// getDocumentType

   this.apiService.getDocumentType().subscribe(res => {
    if (res.data.status = 200) {
      this.DocumentTypedata = res.data
    }
    console.log(this.DocumentTypedata)
  })
   
  }

  OnSubmit (){
    let  data = {
      documentType : this.EmpDocument.controls ["documennt"].value,
      // "documentType":"gjhfd",
       
       "description": this.EmpDocument.controls["Description"].value,
        "chooseFile":this.EmpDocument.controls["file"].value,
  }
 
     // getServiceCategoryg
     this.apiService.essEmpDocumentSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmpDocumentSavedata = res.data
      }
   
      console.log(this.essEmpDocumentSavedata)
    })
     
  }
  

  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
