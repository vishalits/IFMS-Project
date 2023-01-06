import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { data } from 'jquery';

// import { map } from 'rxjs';
// const httpOptions = environment.httpOptions;


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  getEntitlementDetails() {
    throw new Error('Method not implemented.');
  }
  BaseUrl: any;
 
  getServiceCategory() {
    throw new Error("Method not implemented.");
  }
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // baseUrl = "http://localhost:3000/";
  //baseUrl = "http://172.22.32.36:8080/mdm/v1.0/";
  baseUrl = environment.baseUrl;
  baseUrlEmpSave = environment.baseUrlEmpSave;
  //const HttpHeaders = environment.headers;

  // get Marital Status
  getMaritalStatus() {
    return this.http.post<any>(`${this.baseUrl}` + "getMaritalStatus", {});

  }
  // get Blood Group
  getBloodGroup() {
    return this.http.post<any>(`${this.baseUrl}` + "getBloodGroup", {});

  }
  // get Gender
  getGender() {
    return this.http.post<any>(`${this.baseUrl}` + "getGender", {});
  }
  // get getDisability Type
  getDisabilityType() {
    return this.http.post<any>(`${this.baseUrl}` + "getDisabilityType", {});

  }

  // get Payee Type
  getPayeeType() {
    return this.http.post<any>(`${this.baseUrl}` + "getPayeeType", {});
  }
  // get Service Sub Category
  getServiceSubCategory() {
     let requestedData = {
      serviceCategoryId: 1
    }
    return this.http.post<any>(`${this.baseUrl}` + "getServiceSubCategory", requestedData);
  }

  // get Service Quota
  getServiceQuota(){
    return this.http.post<any>(`${this.baseUrl}` + "getServiceQuota", {});

  }
 // getDesignation
 getDesignation(){
  return this.http.post<any>(`${this.baseUrl}` + "getDesignation", {});

}
 // getDepartment
 getDepartment(){
  return this.http.post<any>(`${this.baseUrl}` + "getDepartment", {});

}
   // Get Janaadhaar Data

  GetJanaadhaarData(janaadhaar: any) {
    return this.http.post(`${this.baseUrl}` + `GetJanaadhaarData`, janaadhaar);
  }



  // get CasteCategory
  getCasteCategory(){
    return this.http.post<any>(`${this.baseUrl}` + "getCasteCategory",{});
  
  }


  // session data
  getSession() {
    return this.http.get<any>('./assets/models/userLoginData.json');
  }
  // post session to update id
  postUpdateProcessId(data: any) {
    return this.http.post<any>('./assets/models/userLoginData.json', data )
  }



  // // session data
  // getWorkFlowId(data: any) {
  //   return this.http.post<any>(environment.processURL, data, httpOptions);
  // }


// /////////////////////////////// EmployeeType//////////////////////////////
   getEmployeeType() {
    return this.http.post<any>(`${this.baseUrl}`+ "getEmployeeType",{})
  
  }

  // /////////////////////////////// Service Gategory//////////////////////////////
  getServiceCategoryg() {
    return this.http.post<any>(`${this.baseUrl}`+ "getServiceCategory",{})
  
  }


  // /////////////////////////////// Service Gategory//////////////////////////////
  getSubServiceCategory(data:any) {
    return this.http.post<any>(`${this.baseUrl}`+ "getSubServiceCategory",data)
  
  }

 // /////////////////////////////// JanAadharUserInfo//////////////////////////////
 getJanadharInfo(data:any) {
  return this.http.post<any>(`${this.baseUrl}`+ "getJanadharInfo",data)

}
/////////////////// save data

empSave(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "empSave",data)
}


///////////////////  getEmpoyeeDocumentInWsdl

getEmpoyeeDocumentInWsdl(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "getEmpoyeeDocumentInWsdl",data)
}


///////////////////  saveEmpoyeeDocumentWSDL

saveEmpoyeeDocumentWSDL(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "saveEmpoyeeDocumentWSDL",data)
}


////////// getPayeeInbox

getPayeePrev(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "getPayeePrev",data)
}

////////// getPayeeInbox

getDocumentType() {
  return this.http.post<any>(`${this.baseUrl}`+ "getDocumentType",{})
}


/////////////////// save data

empRegistrationSave(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "empRegistrationSave",data)
}
// ///////////// employeeRegistrationDocumentSave
employeeRegistrationDocumentSave(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "employeeRegistrationDocumentSave",data)
}

// ///////////// employeeRegistrationDocumentSave
EntitlementDetails(data: any) {
  return this.http.post<any>(`${this.baseUrl}`+ "EntitlementDetails",data)
}



// Employee Details All  save api

// ///////////// essEmployeePersonalDetailsSave 1
essEmployeePersonalDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmployeePersonalDetailsSave",data)
}


// ///////////// essEmpIdentificationNumberSave 2
essEmpIdentificationNumberSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmpIdentificationNumberSave",data)
}


// ///////////// essEmpServiceDetailsSave 3
essEmpServiceDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmpServiceDetailsSave",data)
}

// ///////////// essEmpBankDetailsSave
essEmpBankDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmpBankDetailsSave",data)
}

// ///////////// essEmpDocumentSave 4
essEmpDocumentSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmpDocumentSave",data)
}
// ///////////// essEmployeeAddressSave
essEmployeeAddressSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmployeeAddressSave",data)
}

// ///////////// essEmployeeAddressSave 5
essEmpFamilyDetailsSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmpFamilyDetailsSave",data)
}


// ///////////// essEmployeeAddressSave 6
essEmpPayEntitlementSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmpPayEntitlementSave",data)
}


// ///////////// essEmployeeAddressSave 7
essEmployeeDatesSave(data: any) {
  return this.http.post<any>(`${this.baseUrlEmpSave}`+ "essEmployeeDatesSave",data)
}



// get Scheme Type AR
getSchemeType() {
  return this.http.post<any>(`${this.baseUrl}` + "getSchemeType", {});
}

// get Family Relation AR
getFamilyRelation() {
  return this.http.post<any>(`${this.baseUrl}` + "getFamilyRelation", {});
}
// get Date Type AR
getDateType() {
  return this.http.post<any>(`${this.baseUrl}` + "getDateType", {});
}

// get ESS Request Type AR
getESSRequestType() {
  return this.http.post<any>(`${this.baseUrl}` + "getESSRequestType", {});
}
// get ESS SubRequest Type AR
getESSSubRequestType(data:any) {
  return this.http.post<any>(`${this.baseUrl}` + "getESSSubRequestType", data);
}

// get ESS URL AR
getESSUrl(data:any) {
  return this.http.post<any>(`${this.baseUrl}` + "getESSUrl", data);
}



  getrequestedPayload() {
    // let url = "http://localhost:3000/requestedPayload";
    return this.http.get<any>(`${this.baseUrl}` + "requestedPayload");
  }


  getAdminDepartment(adminDeptId: any) {
    return this.http.post<any>(`${this.baseUrl}` + "getAdminDepartment", adminDeptId);

  }


  // get major head
  getMajorHead() {
    return this.http.get<any>(`${this.baseUrl}` + 'getMajorHead');
  }


  // get sub major head data
  getSubMajorHead(majorHeadCode: number) {
    let params = new HttpParams().set('majorHeadCode', majorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getSubMajorHead/', { params })
  }

  // get minor head
  getMinorHead(subMajorHeadCode: number) {
    let params = new HttpParams().set('subMajorHeadCode', subMajorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getMinorHead/', { params })
  }

  // get minor head
  getSubMinorHead(minorHeadCode: number) {
    let params = new HttpParams().set('minorHeadCode', minorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getSubMinorHead/', { params })
  }

  // get group head
  getGroupHead(subMinorHeadCode: number) {
    let params = new HttpParams().set('minorHeadCode', subMinorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getSubGroupHead/', { params })
  
  }

  
  
  
// getState
getState(){
  return this.http.post<any>(`${this.baseUrl}`+ "getState",{})
}

// getState
getDistrict(stateId:any){
  return this.http.post<any>(`${this.baseUrl}`+ "getDistrict",{'iStateId':stateId})
}




//getBlockMunicipal
getBlockMunicipal(data:any){
  return this.http.post<any>(`${this.baseUrl}`+ "getMunicipalArea",data)
}
//getPanchayatWard
getPanchayatWard(data:any){
  return this.http.post<any>(`${this.baseUrl}`+ "getGramPanchayat",data)
}
 //getWard
 getWard(data:any){
  return this.http.post<any>(`${this.baseUrl}`+ "getWard",data)
}

  // get Bank
  getBank() {
    return this.http.post<any>(`${this.baseUrl}` + "getBank", {});
  }
// get Bank Branch
getBankBranch(data:any) {
  return this.http.post<any>(`${this.baseUrl}` + "getBankBranch", data);
}
//getDaRate
getDaRate(){
  return this.http.post<any>(`${this.baseUrl}` + "getDaRate",  {"daRate":2}); 
}

//getDaRate
getPayCommision(){
  return this.http.post<any>(`${this.baseUrl}` + "getPayCommision",  {}); 
}

//getHra
getHra(){
  return this.http.post<any>(`${this.baseUrl}` + "getHra",  {"payeeCommissionId":"5" }); 
}


getEmployeeDetail(empid:any){
  return this.http.post<any>(`${this.baseUrl}` + "getEmployeeDetail",  {"employeeCode":empid }); 
}

//SubmitEntitySave
SubmitEntitySave(data:any){
  return this.http.post<any>(`${this.baseUrl}` + "SubmitEntitySave", data);

}
essUpdateEmployeeDate(data:any){
  return this.http.post<any>(`${this.baseUrl}` + "essUpdateEmployeeDate", data);

}
essBankAccountChangeRequest(data:any){
  return this.http.post<any>(`${this.baseUrl}` + "essBankAccountChangeRequest", data);

}
essEmployeeNomineeUpdate(data:any){
  return this.http.post<any>(`${this.baseUrl}` + "essEmployeeNomineeUpdate", data);

}
essUpdateOtherNumber(data:any){
  return this.http.post<any>(`${this.baseUrl}` + "essUpdateOtherNumber", data);

}

// get tile url landing
getTileUrl(roleid:any){
  return this.http.post<any>(`${this.baseUrl}` + "getTileUrl", {"InRoleId":roleid});
}

}