import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor() {}
  @Input() alertMessage = '';
  @Input() showAlert = false;

  ngOnInit(): void {}
}
