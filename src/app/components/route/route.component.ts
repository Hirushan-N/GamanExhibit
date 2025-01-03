import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';
import { RouteService } from '../../services/route.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpDisplayComponent],
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
})
export class RouteComponent {
  searchData = { routeNumber: '', startLocation: '', endLocation: '', stops: '' };
  createData = { routeNumber: '', startLocation: '', endLocation: '', stops: [], variant: 'REGULAR', distance: null, averageSpeed: null, duration: null };
  updateData = { id: '', routeNumber: '', startLocation: '', endLocation: '', stops: [], variant: '', distance: null, averageSpeed: null, duration: null };
  deleteData = { id: '' };

  searchRequest: any = null;
  searchResponse: any = null;

  createRequest: any = null;
  createResponse: any = null;

  updateRequest: any = null;
  updateResponse: any = null;
  
  deleteRequest: any = null;
  deleteResponse: any = null;

  constructor(private routeService: RouteService, private loggerService: LoggerService) {}

  onSearchRoutes(): void {
    this.routeService.searchRoutes(this.searchData).subscribe(
      () => {
        this.searchRequest = this.loggerService.getRequest();
        this.searchResponse = this.loggerService.getResponse();
      },
      () => {
        this.searchRequest = this.loggerService.getRequest();
        this.searchResponse = this.loggerService.getResponse();
      }
    );
  }

  onCreateRoute(): void {
    this.routeService.createRoute(this.createData).subscribe(
      () => {
        this.createRequest = this.loggerService.getRequest();
        this.createResponse = this.loggerService.getResponse();
      },
      () => {
        this.createRequest = this.loggerService.getRequest();
        this.createResponse = this.loggerService.getResponse();
      }
    );
  }

  onUpdateRoute(): void {
    this.routeService.updateRoute(this.updateData.id, this.updateData).subscribe(
      () => {
        this.updateRequest = this.loggerService.getRequest();
        this.updateResponse = this.loggerService.getResponse();
      },
      () => {
        this.updateRequest = this.loggerService.getRequest();
        this.updateResponse = this.loggerService.getResponse();
      }
    );
  }

  onDeleteRoute(): void {
    this.routeService.deleteRoute(this.deleteData.id).subscribe(
      () => {
        this.deleteRequest = this.loggerService.getRequest();
        this.deleteResponse = this.loggerService.getResponse();
      },
      () => {
        this.deleteRequest = this.loggerService.getRequest();
        this.deleteResponse = this.loggerService.getResponse();
      }
    );
  }

  onReset(tab: string): void {
    if (tab === 'search') {
      this.searchData = { routeNumber: '', startLocation: '', endLocation: '', stops: '' };
      this.searchRequest = null;
      this.searchResponse = null;
    } else if (tab === 'create') {
      this.createData = { routeNumber: '', startLocation: '', endLocation: '', stops: [], variant: 'REGULAR', distance: null, averageSpeed: null, duration: null };
      this.createRequest = null;
      this.createResponse = null;
    } else if (tab === 'update') {
      this.updateData = { id: '', routeNumber: '', startLocation: '', endLocation: '', stops: [], variant: '', distance: null, averageSpeed: null, duration: null };
      this.updateRequest = null;
      this.updateResponse = null;
    } else if (tab === 'delete') {
      this.deleteData = { id: '' };
      this.deleteRequest = null;
      this.deleteResponse = null;
    }
  }
}
