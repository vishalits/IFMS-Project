import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-essbutton',
  templateUrl: './essbutton.component.html',
  styleUrls: ['./essbutton.component.css']
})
export class ESSbuttonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  componentLoad(cname:any):void{
    this.router.navigate(['/'+cname]);
  }

}
