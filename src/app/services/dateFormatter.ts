
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

 
@Injectable()
export class NgbDateCustomformatter  {
constructor(public datepipe: DatePipe){}
    format:string='dd-mm-yyyy';
    formatDate(date:Date):any{
        return this.datepipe.transform(date,this.format);
    }
}