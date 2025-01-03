import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';
import { ScheduleService } from '../../services/schedule.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpDisplayComponent],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  // Get All Schedules
  getAllRequest: any = null;
  getAllResponse: any = null;

  // Get Schedule by ID
  getByIdData = ''; // Input data for Get By ID
  getByIdRequest: any = null;
  getByIdResponse: any = null;

  // Create Schedule
  createData = { scheduleName: '', routeId: '', status: 'ACTIVE' };
  createRequest: any = null;
  createResponse: any = null;

  // Update Schedule
  updateData = { id: '', scheduleName: '', routeId: '', status: '' };
  updateRequest: any = null;
  updateResponse: any = null;

  // Delete Schedule
  deleteData = { id: '' };
  deleteRequest: any = null;
  deleteResponse: any = null;

  constructor(private scheduleService: ScheduleService, private loggerService: LoggerService) {}

  // Fetch All Schedules
  onGetAllSchedules(): void {
    this.scheduleService.getAllSchedules().subscribe(
      () => {
        this.getAllRequest = this.loggerService.getRequest();
        this.getAllResponse = this.loggerService.getResponse();
      },
      () => {
        this.getAllRequest = this.loggerService.getRequest();
        this.getAllResponse = this.loggerService.getResponse();
      }
    );
  }

  // Fetch Schedule by ID
  onGetScheduleById(): void {
    this.scheduleService.getScheduleById(this.getByIdData).subscribe(
      () => {
        this.getByIdRequest = this.loggerService.getRequest();
        this.getByIdResponse = this.loggerService.getResponse();
      },
      () => {
        this.getByIdRequest = this.loggerService.getRequest();
        this.getByIdResponse = this.loggerService.getResponse();
      }
    );
  }

  // Create a Schedule
  onCreateSchedule(): void {
    this.scheduleService.createSchedule(this.createData).subscribe(
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

  // Update a Schedule
  onUpdateSchedule(): void {
    this.scheduleService.updateSchedule(this.updateData.id, this.updateData).subscribe(
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

  // Delete a Schedule
  onDeleteSchedule(): void {
    this.scheduleService.deleteSchedule(this.deleteData.id).subscribe(
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

  // Reset Forms and Responses for Specific Tabs
  onReset(tab: string): void {
    if (tab === 'getAll') {
      this.getAllRequest = null;
      this.getAllResponse = null;
    } else if (tab === 'getById') {
      this.getByIdData = '';
      this.getByIdRequest = null;
      this.getByIdResponse = null;
    } else if (tab === 'create') {
      this.createData = { scheduleName: '', routeId: '', status: 'ACTIVE' };
      this.createRequest = null;
      this.createResponse = null;
    } else if (tab === 'update') {
      this.updateData = { id: '', scheduleName: '', routeId: '', status: '' };
      this.updateRequest = null;
      this.updateResponse = null;
    } else if (tab === 'delete') {
      this.deleteData = { id: '' };
      this.deleteRequest = null;
      this.deleteResponse = null;
    }
  }
}
