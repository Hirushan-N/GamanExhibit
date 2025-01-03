import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';
import { BusService } from '../../services/bus.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpDisplayComponent],
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
})
export class BusComponent {
  // Data models for each tab
  searchData = { busNumber: '', capacity: null, ownershipType: '', status: '' };
  createData = { busNumber: '', capacity: null, operatorId: '', ownershipType: '', status: 'ACTIVE' };
  updateData = { id: '', busNumber: '', capacity: null, operatorId: '', ownershipType: '', status: '' };
  deleteData = { id: '' };

  // Unique Request and Response Objects for each endpoint
  searchRequest: any = null;
  searchResponse: any = null;

  createRequest: any = null;
  createResponse: any = null;

  updateRequest: any = null;
  updateResponse: any = null;

  deleteRequest: any = null;
  deleteResponse: any = null;

  constructor(private busService: BusService,private loggerService: LoggerService) {}

  // Search Buses
  onSearchBuses(): void {
    this.busService.searchBuses(this.searchData).subscribe(
      (response) => {
        this.searchRequest = this.loggerService.getRequest();
        this.searchResponse = this.loggerService.getResponse();
      },
      (error) => {
        this.searchRequest = this.loggerService.getRequest();
        this.searchResponse = this.loggerService.getResponse();
      }
    );
  }

  // Create Bus
  onCreateBus(): void {
    this.busService.createBus(this.createData).subscribe(
      (response) => {
        this.createRequest = this.loggerService.getRequest();
        this.createResponse = this.loggerService.getResponse();
      },
      (error) => {
        this.createRequest = this.loggerService.getRequest();
        this.createResponse = this.loggerService.getResponse();
      }
    );
  }

  // Update Bus
  onUpdateBus(): void {
    this.busService.updateBus(this.updateData.id, this.updateData).subscribe(
      (response) => {
        this.updateRequest = this.loggerService.getRequest();
        this.updateResponse = this.loggerService.getResponse();
      },
      (error) => {
        this.updateRequest = this.loggerService.getRequest();
        this.updateResponse = this.loggerService.getResponse();
      }
    );
  }

  // Delete Bus
  onDeleteBus(): void {
    this.busService.deleteBus(this.deleteData.id).subscribe(
      (response) => {
        this.deleteRequest = this.loggerService.getRequest();
        this.deleteResponse = this.loggerService.getResponse();
      },
      (error) => {
        this.deleteRequest = this.loggerService.getRequest();
        this.deleteResponse = this.loggerService.getResponse();
      }
    );
  }

  // Reset a specific form
  onReset(tab: string): void {
    if (tab === 'search') {
      this.searchData = { busNumber: '', capacity: null, ownershipType: '', status: '' };
      this.searchRequest = null;
      this.searchResponse = null;
    }
    if (tab === 'create') {
      this.createData = { busNumber: '', capacity: null, operatorId: '', ownershipType: '', status: 'ACTIVE' };
      this.createRequest = null;
      this.createResponse = null;
    }
    if (tab === 'update') {
      this.updateData = { id: '', busNumber: '', capacity: null, operatorId: '', ownershipType: '', status: '' };
      this.updateRequest = null;
      this.updateResponse = null;
    }
    if (tab === 'delete') {
      this.deleteData = { id: '' };
      this.deleteRequest = null;
      this.deleteResponse = null;
    }
  }
}
