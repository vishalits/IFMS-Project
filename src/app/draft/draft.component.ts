
import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';


export interface UserData {
  requestID: string;
  reqDescription: string;
  createdDate: string;

  initiator: string;
}

/** Constants used to fill up our data base. */
const initiator: string[] = [
  'blueberry',

 
];


const reqDescription: string[] = [
 'Employee Registration'

 
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */


@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['requestID', 'initiator', 'reqDescription', 'createdDate', 'previousAsignee', 'status', 'remarks', 'action'];
  // columnHeaders: string[] = ['requestID', 'initiator', 'Request Description', 'Initiated Date', 'Received From', 'Status', 'Remarks'];
  dataSource !: MatTableDataSource<UserData>;
  Search: String = '';
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;



  constructor(private router: Router) {  // Create 100 users
     // Create 100 users
     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(users);
   }
   





  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // Redirect  button
  


  // end redirect button

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {


  const 
  Description = reqDescription[Math.round(Math.random() * (reqDescription.length - 1))] +
    ' ' +
    reqDescription[Math.round(Math.random() * (reqDescription.length - 1))].charAt(0) +
    '';



  return {
    requestID: id.toString(),
    reqDescription: Description,
    createdDate: Math.round(Math.random() * 100).toString(),
    initiator: initiator[Math.round(Math.random() * (initiator.length - 1))],
  };
}

