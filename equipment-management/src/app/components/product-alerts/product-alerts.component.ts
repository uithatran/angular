import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  @Output() titleChange = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  title = "Getting started in angular.io New";
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  emitTitleChange() {
    this.titleChange.emit(this.title);
  }
  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

}
