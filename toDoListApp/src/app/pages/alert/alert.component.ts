import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  visible = true;
  dismissible = true;
  constructor() { }

  ngOnInit(): void {
  }

}
