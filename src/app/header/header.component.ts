import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  document: any;

  constructor() { }

  ngOnInit(): void {
  }
  resetFont(): void {
    this.document.body.style.fontSize = "16px";

  }
}
