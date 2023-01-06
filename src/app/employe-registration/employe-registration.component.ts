import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { data } from "jquery";
import { disable } from "@rxweb/reactive-form-validators";
import { MAT_DATE_LOCALE } from "@angular/material/core";


@Component({
  selector: "app-employe-registration",
  templateUrl: "./employe-registration.component.html",
  styleUrls: ['./employe-registration.component.css'],
  providers:[{ provide: MAT_DATE_LOCALE, useValue: 'en-us' }]
})
export class EmployeRegistrationComponent implements OnInit {
  checked = false;


  // loder  button

  disableSearch = true;
  button = 'saveEmpoyeeDocumentWSDL';
  isLoading = false;
  buttons = {
    button: {
      name: 'Button',
      loading: false
    },

  }

  isNextDisabled = true;
  disabled = true;


  // end loder button


  serach = "^[2-9]{1}[0-9]{11}$"


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  isEditable = false;
  showEdit:boolean=false;
  EmpRegistration!: FormGroup;
  SaveDocument!: FormGroup
  ServiceCategorygdata: any;
  SubServiceCategorydata: any;
  selectedRecord: any = {};
  JanadharInfodata$: any;
  formBuilder: any;
  httpClient: any;
  assignedto: any;
  des: any;
  rem: any;
rid:any;
  private readonly newProperty = this;
  empSavedata: any;
  DocumentTypedata: any;
  img: any;
  employeeRegistrationDocumentSavedata: any;
  file!: File;
  assigened!: string;
  remark!: string;
  document!: string
  Description!: string
  


  constructor(
    private _formBuilder: FormBuilder,
    private apiService: ApiService,
    private http: HttpClient,
    private dataStore: DataStoreService
  ) {


  }
  //  button loder

  // select  image


  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];

      //  let reader = new FileReader();
      //  reader.readAsDataURL(file)
      //  reader.onload = (event: any) => {
      //  event.target.result;
      //   this.EmpRegistration.patchValue({
      //     fileSource:file,
      //   });

      //  }
      //this.fileName = e.target.files[0].name;


    }
  }


  ngOnInit(): void {
    

    this.EmpRegistration = this._formBuilder.group({

      JanAadharId: new FormControl("", Validators.required),
      employeeType: new FormControl("-1", Validators.required),
      MemberID: new FormControl("", Validators.required),
      JanadharInfodata: new FormControl('', [Validators.required, Validators.minLength(10)]),
      service_Category: new FormControl("-1", Validators.required),
      serviceSub_Category: new FormControl("-1", Validators.required),
      Name: new FormControl("", Validators.required),
      fatherName: new FormControl("", ),
      fname: new FormControl("", Validators.required),
      mname: new FormControl("", Validators.required),
      // fatherNames: new FormControl("",),
      AppointmentOrder: new FormControl('', Validators.required),
      dob: new FormControl("", Validators.required),
      mobile_No: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),]),
      // DOCUMENT
      file: new FormControl('', Validators.required),
      assigened: new FormControl('', Validators.required),
      Description: new FormControl("-1", Validators.required),
      Appointmentdate: new FormControl("", Validators.required,),
      remark: new FormControl('', Validators.required),
      ram: new FormControl('', Validators.required)


    });


   

    this.someFunction()

    this.EmpRegistration.valueChanges.subscribe((v) => {
      this.isNextDisabled = !this.EmpRegistration.valid;
    });
  }
  // EmpDocDetail: any = [];
  EmpDocDetail = new Array();
  // {

  // }

  fileName = new String();
  fileData = new String();


  saveEmpoyeeDocumentWSDL() {
    // loder time

    this.isLoading = true;
    this.button = 'EmpoyeeDocumentInWsdldata';

    setTimeout(() => {
      this.isLoading = false;
      this.button = '';

      alert('Document Uploaded  Successfully  / दस्तावेज़ सफलतापूर्वक अपलोड  हो  गया ');
      // this.saveEmpoyeeDocumentWSDL()
      //   Swal.fire('Thank you...', 'You submitted succesfully!', 'success')

    }, 10000);


    // end loder time

    let requestData = new FormData();
    requestData.append("file", this.file);

    this.apiService.saveEmpoyeeDocumentWSDL(requestData)
      .subscribe(res => {
        if (res.status = "SUCCESS") {
          this.saveEmpoyeeDocumentWSDLdata = res.data
          alert("id of document" + res.data.getDID)
          alert("status message of document" + res.data.getStatusInfo)
          let requestedDatas = {
            "documentId": res.data.getDID
          }

          this.apiService.getEmpoyeeDocumentInWsdl(requestedDatas).subscribe(res => {
            if (res.data.status = 200) {
              this.EmpDocDetail = res.data;
              this.fileName = res.data.fileName;
              this.fileData = res.data.fileData;
              alert('vcv' + this.fileName);
              // console.log ( 'gdsfsgf'+   this.EmpDocDetail)
              alert(res.data.fileName)
              this.EmpoyeeDocumentInWsdldata = res.data
            }
            console.log(this.EmpoyeeDocumentInWsdldata)
          })
        }
        console.log(this.saveEmpoyeeDocumentWSDLdata)
      })

  }
  saveEmpoyeeDocumentWSDLdata(saveEmpoyeeDocumentWSDLdata: any) {
    throw new Error("Method not implemented.");
  }





  ///////  search Janaaddhar Id
  JanAadharId: string = '';
  getJanAadhar() {
    var myusername = (<HTMLInputElement>document.getElementById("JanadharInfodata")).value;
    var vl = (<HTMLInputElement>document.getElementById("sptxt"));
    // alert(myusername.length);

    if (myusername.length < 10) {
      vl.innerText = "Not Valid";
      this.EmpRegistration.reset();
      this.JanadharInfodata = [];
      return;

    }
    else {

      vl.innerText = "Valid";
      // this.submitted = true;

      // this.EmpRegistration.reset();
      // alert('this is id : ' + this.JanAadharId);
      let requestedDatas = { janAadharId: this.JanAadharId }

      this.apiService.getJanadharInfo(requestedDatas).subscribe(res => {

        if (res.data.status = 200) {

          this.JanadharInfodata = res.data

        }
       
        console.log(this.JanadharInfodata.data)
      })

    }
  }



  // autolode data selecter
  setFormValue(formname: FormGroup, fields: []): any {

  }

  updateSorting(abc: any) {

    this.selectedRecord = this.JanadharInfodata.filter((item: any) => {
      return item.janMid == abc.target.value;
    })[0];

    //console.log(this.selectedRecord )
    // save data in selector 
    this.EmpRegistration.patchValue({
      employeeType: this.selectedRecord.employeeType,
      service_Category: this.selectedRecord.serviceCategoryId,
      serviceSub_Category: this.selectedRecord.subServiceCategory,
      Name: this.selectedRecord.nameEng,
      name_hindi: this.selectedRecord.nameHnd,
      fname: this.selectedRecord.fnameEng,
      mname: this.selectedRecord.mnameEng,
      dob: this.selectedRecord.dob,
      bankAccountNumber: this.selectedRecord.acc,
      IfscCode: this.selectedRecord.ifsc,
      BankName: this.selectedRecord.bankName,
      BranchName: this.selectedRecord.bankBranch,
      mobile_No: this.selectedRecord.mobile,
      // addhar_no: this.selectedRecord.aadhar,
    });


  }
  ///////// submit data
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.EmpRegistration.invalid) {
      // empSave local json file in api
      let data = {
        "janAadharId": this.JanAadharId,
        "memberId": this.EmpRegistration.controls["MemberID"].value,
        "employeeType": this.EmpRegistration.controls["employeeType"].value,
        "serviceCategoryId": this.EmpRegistration.controls["service_Category"].value,
        "subServiceCategory": this.EmpRegistration.controls["serviceSub_Category"].value,
        "empName": this.EmpRegistration.controls["Name"].value,
        "appomentOrderNo": this.EmpRegistration.controls["AppointmentOrder"].value,
        "dob": this.EmpRegistration.controls["dob"].value,
        "mobile": 1234567890,
        "icreatedBy": 3,
        "iofficeId":1,
        "fatherName": this.EmpRegistration.controls["fname"].value,
        "appomentDate": this.EmpRegistration.controls["Appointmentdate"].value,
        "motherName": this.EmpRegistration.controls["mname"].value,
      }

      this.apiService.empRegistrationSave(data).subscribe({
        next: (res) => {
          // var getCasteCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            alert("Save As Draft Successfully");
            this.empSavedata = res.data
            this.rid=res.data.requestId
            // alert( this.rid)
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }

        }
      })




    }

    else {
      alert("form is invalid");
    }
  }


  // Define Varivale

  EmployeeTypedata: any = [];

  private _ServiceCategorygdata: any;
  private _SubServiceCategorydata: any;
  JanadharInfodata: any;
  // EmployeeType
  someFunction(): void {
    // getEmployeeType
    this.apiService.getEmployeeType().subscribe(res => {
      if (res.data.status = 200) {
        this.EmployeeTypedata = res.data
      }
      console.log(this.EmployeeTypedata)
    })

    // getServiceCategoryg
    this.apiService.getServiceCategoryg().subscribe(res => {
      if (res.data.status = 200) {
        this.ServiceCategorygdata = res.data
      }
      console.log(this.ServiceCategorygdata)
    })

    //////////// getDocumentType

    this.apiService.getDocumentType().subscribe(res => {
      if (res.data.status = 200) {
        this.DocumentTypedata = res.data
      }
      console.log(this.DocumentTypedata)
    })
  }

  finalsubmit(): void {

    let SaveDocumentFile = new FormData();

    SaveDocumentFile.append("file", this.file);

    // SaveDocumentFile.append("document", this.document,
    //  );
    this.assignedto = $("#assigened").val();
    this.rem = $("#remark").val();
    this.des = $("#Description").val();

   
    // alert(this.EmpRegistration.controls["assigened"].value)
    SaveDocumentFile.append("assignTo", this.assignedto);
    SaveDocumentFile.append("remarks", this.rem);
    SaveDocumentFile.append("requestId", this.rid);
    SaveDocumentFile.append("discription", this.des);

    // alert(this.rid),
    // }

    this.apiService.employeeRegistrationDocumentSave(SaveDocumentFile).subscribe(res => {
      if (res.data.status = 200) {
        this.employeeRegistrationDocumentSavedata = res.data
      }
      alert("Document saved Successfully,"  +  " Request Id is :" + this.rid +  ". Kindly save this for future reference.");
      console.log(this.employeeRegistrationDocumentSavedata)
    })
  }

  EmpoyeeDocumentInWsdldata(_EmpoyeeDocumentInWsdldata: any) {
    throw new Error("Method not implemented.");
  }

  getSubServiceCategory(event: any) {
    // alert(event.target.value)
    let requestedData = {
      serviceCategoryId: event.target.value
    }
    this.apiService.getSubServiceCategory(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.SubServiceCategorydata = res.data
      }
      console.log(this.SubServiceCategorydata)
    })




  }
  data() {
    throw new Error("Method not implemented.");
  }


  // number validation


  getToday(): string {
    // var test   = document.getElementById("appt");
    // console.log(test);
    return new Date().toISOString().split('T')[0]
  }

  getMinDate():string{
    return new Date('01/11/2021').toISOString().split('T')[0]

  }

  disableDate():void{
    this.EmpRegistration.controls['Appointmentdate'].disable();
    this.showEdit=true;
   
  }

  enableInput():void{
    this.EmpRegistration.controls['Appointmentdate'].enable();
    this.showEdit=false;
  }


  numberOnly(event: { which: any; keyCode: any; }): boolean {

    //alert(this.EmpRegistration.controls['JanadharInfodata'].valid);
    this.disableSearch = true;
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;

    }
    return true;

  }

  // Only AlphaNumeric with Some Characters [-_ ]
  keyPressAlphaNumericWithCharacters(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    // Allow numbers, alpahbets, space, underscore
    if (/[a-zA-Z0-9-_ /.]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onClicked(val: any) {
    this.checked = val;
  }

}

function alertWithSuccess() {
  throw new Error("Function not implemented.");
}

function savedatas() {
  throw new Error("Function not implemented.");
}

