import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  status: boolean = false;
  @Input() mangGhe: any;
  @Output() eventChon = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleTrangThai() {
    this.status = !this.status;
    this.eventChon.emit(this.status);
  }
}
