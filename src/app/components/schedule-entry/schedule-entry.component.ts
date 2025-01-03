import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';
import { ScheduleEntryService } from '../../services/schedule-entry.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-schedule-entry',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpDisplayComponent],
  templateUrl: './schedule-entry.component.html',
  styleUrls: ['./schedule-entry.component.css'],
})
export class ScheduleEntryComponent {
  getAllRequest: any = null;
  getAllResponse: any = null;

  getByIdData = '';
  getByIdRequest: any = null;
  getByIdResponse: any = null;

  getByScheduleIdData = '';
  getByScheduleIdRequest: any = null;
  getByScheduleIdResponse: any = null;

  createData = {
    scheduleId: '',
    busId: '',
    departureTerminal: '',
    arrivalTerminal: '',
    departureTime: '',
    arrivalTime: '',
    stopsSchedule: [{ stop: '', time: '' }],
    activeDays: [],
  };
  createRequest: any = null;
  createResponse: any = null;

  updateData = {
    id: '',
    scheduleId: '',
    busId: '',
    departureTerminal: '',
    arrivalTerminal: '',
    departureTime: '',
    arrivalTime: '',
    stopsSchedule: [{ stop: '', time: '' }],
    activeDays: [],
  };
  updateRequest: any = null;
  updateResponse: any = null;

  deleteData = { id: '' };
  deleteRequest: any = null;
  deleteResponse: any = null;

  constructor(private scheduleEntryService: ScheduleEntryService, private loggerService: LoggerService) {}

  onGetAllScheduleEntries(): void {
    this.scheduleEntryService.getAllScheduleEntries().subscribe(
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

  onGetScheduleEntryById(): void {
    this.scheduleEntryService.getScheduleEntryById(this.getByIdData).subscribe(
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

  onGetScheduleEntriesByScheduleId(): void {
    this.scheduleEntryService.getScheduleEntriesByScheduleId(this.getByScheduleIdData).subscribe(
      () => {
        this.getByScheduleIdRequest = this.loggerService.getRequest();
        this.getByScheduleIdResponse = this.loggerService.getResponse();
      },
      () => {
        this.getByScheduleIdRequest = this.loggerService.getRequest();
        this.getByScheduleIdResponse = this.loggerService.getResponse();
      }
    );
  }

  onCreateScheduleEntry(): void {
    this.scheduleEntryService.createScheduleEntry(this.createData).subscribe(
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

  onUpdateScheduleEntry(): void {
    this.scheduleEntryService.updateScheduleEntry(this.updateData.id, this.updateData).subscribe(
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

  onDeleteScheduleEntry(): void {
    this.scheduleEntryService.deleteScheduleEntry(this.deleteData.id).subscribe(
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
    if (tab === 'getAll') {
      this.getAllRequest = null;
      this.getAllResponse = null;
    } else if (tab === 'getById') {
      this.getByIdData = '';
      this.getByIdRequest = null;
      this.getByIdResponse = null;
    } else if (tab === 'getByScheduleId') {
      this.getByScheduleIdData = '';
      this.getByScheduleIdRequest = null;
      this.getByScheduleIdResponse = null;
    } else if (tab === 'create') {
      this.createData = {
        scheduleId: '',
        busId: '',
        departureTerminal: '',
        arrivalTerminal: '',
        departureTime: '',
        arrivalTime: '',
        stopsSchedule: [{ stop: '', time: '' }],
        activeDays: [],
      };
      this.createRequest = null;
      this.createResponse = null;
    } else if (tab === 'update') {
      this.updateData = {
        id: '',
        scheduleId: '',
        busId: '',
        departureTerminal: '',
        arrivalTerminal: '',
        departureTime: '',
        arrivalTime: '',
        stopsSchedule: [{ stop: '', time: '' }],
        activeDays: [],
      };
      this.updateRequest = null;
      this.updateResponse = null;
    } else if (tab === 'delete') {
      this.deleteData = { id: '' };
      this.deleteRequest = null;
      this.deleteResponse = null;
    }
  }
}
