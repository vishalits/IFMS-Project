// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { HttpHeaders } from "@angular/common/http";


const baseUrl = "http://172.22.32.100:5001/";
const baseUrlEmpSave = "http://172.22.32.100:5000/employeeEss/v1.0/";

export const environment = {
  production: false,
  baseUrl: baseUrl,
  baseUrlEmpSave: baseUrlEmpSave,



  // httpOptions: {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*'
  //   })
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
