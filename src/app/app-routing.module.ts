import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentsComponent } from './EmployeeDetails/documents/documents.component';
import { ModalsComponent } from './modals/modals.component';
import { LoginComponent } from './login/login.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { InboxComponent } from './inbox/inbox.component';
import { MainComponent } from './main/main.component';
import { DraftComponent } from './draft/draft.component';
import { SendComponent } from './send/send.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeIdentificationComponent } from './EmployeeDetails/employee-identification/employee-identification.component';
import { AddressComponent } from './EmployeeDetails/address/address.component';
import { FamilyDetailsComponent } from './EmployeeDetails/family-details/family-details.component';
import { EmployeeServiceDetailsComponent } from './EmployeeDetails/employee-service-details/employee-service-details.component';
import { BankDetailsComponent } from './EmployeeDetails/bank-details/bank-details.component';
import { PayEntitlementComponent } from './EmployeeDetails/pay-entitlement/pay-entitlement.component';
import { EmpMstComponent } from './emp-mst/emp-mst.component';
import { EmpGenDetailComponent } from './emp-mst/emp-gen-detail/emp-gen-detail.component';
import { EmpIdentityComponent } from './emp-mst/emp-identity/emp-identity.component';
import { EmpDateComponent } from './emp-mst/emp-date/emp-date.component';
import { EmpFamilyDetailComponent } from './emp-mst/emp-family-detail/emp-family-detail.component';
import { EmpBankAcDetailComponent } from './emp-mst/emp-bank-ac-detail/emp-bank-ac-detail.component';
import { EmpPayEComponent } from './emp-mst/emp-pay-e/emp-pay-e.component';
import { EmpDocComponent } from './emp-mst/emp-doc/emp-doc.component';
import { EmpAddressComponent } from './emp-mst/emp-address/emp-address.component';
import { EmployeeSelfServiceComponent } from './ess-req/employee-self-service/employee-self-service.component';
import { EmplyeeNomineeUpdateComponent } from './ess-req/employee-self-service/emplyee-nominee-update/emplyee-nominee-update.component';
import { EmployeeDateTypeComponent } from './ess-req/employee-self-service/employee-date-type/employee-date-type.component';
import { UpdateNumberComponent } from './ess-req/employee-self-service/update-number/update-number.component';
import { BankAccNoComponent } from './ess-req/employee-self-service/bank-acc-no/bank-acc-no.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ESSReqComponent } from './ess-req/ess-req.component';
import { EmployeeDatesComponent } from './EmployeeDetails/employee-dates/employee-dates.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:MainComponent},
  {path:'employee_master',component:EmployeemasterComponent},
  {path:'employe_registration',component:EmployeRegistrationComponent},
  
  // {path:'documents',component:DocumentsComponent},
  {path:'modals',component:ModalsComponent},
  {path:'inbox',component:InboxComponent},
  { path:'Draft', component:DraftComponent },
  { path:'Send', component:SendComponent },
  {path:'main',component:MainComponent},
  { path:'employee-details',component:EmployeeDetailsComponent},
  { path:'employeeIdentification',component:EmployeeIdentificationComponent},
  { path:'address',component:AddressComponent},
  { path:'familyDetails',component:FamilyDetailsComponent},
  { path:'EmployeeService',component:EmployeeServiceDetailsComponent},
  { path:'bank-details',component:BankDetailsComponent},
  { path:'pay-entitlement',component:PayEntitlementComponent},
  { path:'document',component:DocumentsComponent},
  {path:'EmpMstComponent', component:EmpMstComponent},
  {path:'EmpGenDetailComponent', component:EmpGenDetailComponent},
  {path:'EmpIdentityComponent', component:EmpIdentityComponent},
  {path:'EmpDateComponent', component:EmpDateComponent},
  {path:'EmpFamilyDetailComponent', component:EmpFamilyDetailComponent},
  {path:'EmpBankAcDetailComponent', component:EmpBankAcDetailComponent},
  {path:'EmpPayEComponent', component:EmpPayEComponent},
  {path:'EmpDocComponent', component:EmpDocComponent},
  {path:'EmpAddressComponent',component:EmpAddressComponent},
  {path:'EmpDate',component:EmployeeDatesComponent},

  // as
  {path:'employee-self-service', component:EmployeeSelfServiceComponent},
  {path:'employee-nominee-update', component:EmplyeeNomineeUpdateComponent},
  {path:'employee-date-type', component:EmployeeDateTypeComponent},
  {path:'update-number', component:UpdateNumberComponent},
  {path:'bank-acc-number', component:BankAccNoComponent},
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'ESS-Req', component:ESSReqComponent,

  children:[
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},

  ]
},
{ path: '', redirectTo: '/main' , pathMatch:"full"}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
