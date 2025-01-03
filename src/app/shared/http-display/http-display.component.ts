import { Component, Input } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer'; // Import the module
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-display',
  standalone: true,
  imports: [NgxJsonViewerModule,CommonModule],
  templateUrl: './http-display.component.html',
  styleUrls: ['./http-display.component.css'],
})
export class HttpDisplayComponent {
  @Input() requestObject: any = null;
  @Input() responseObject: any = null;
}
