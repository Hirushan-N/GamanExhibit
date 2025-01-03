import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';
import { TicketService } from '../../services/ticket.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpDisplayComponent],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  searchData = { commuterPhone: '', scheduleEntryId: '', busId: '', routeId: '', status: '', paymentStatus: '' };
  createData = { commuterPhone: '', scheduleEntryId: '', busId: '', routeId: '', seatNumber: null, paymentType: '' };
  updateData = { id: '', status: '', otp: '', seatNumber: null, paymentType: '' };
  deleteData = { id: '' };

  searchRequest: any = null;
  searchResponse: any = null;

  createRequest: any = null;
  createResponse: any = null;

  updateRequest: any = null;
  updateResponse: any = null;

  deleteRequest: any = null;
  deleteResponse: any = null;

  constructor(private ticketService: TicketService, private loggerService: LoggerService) {}

  onSearchTickets(): void {
    this.ticketService.searchTickets(this.searchData).subscribe(
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

  onCreateTicket(): void {
    this.ticketService.createTicket(this.createData).subscribe(
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

  onUpdateTicket(): void {
    this.ticketService.updateTicket(this.updateData.id, this.updateData).subscribe(
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

  onDeleteTicket(): void {
    this.ticketService.deleteTicket(this.deleteData.id).subscribe(
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
      this.searchData = { commuterPhone: '', scheduleEntryId: '', busId: '', routeId: '', status: '', paymentStatus: '' };
      this.searchRequest = null;
      this.searchResponse = null;
    } else if (tab === 'create') {
      this.createData = { commuterPhone: '', scheduleEntryId: '', busId: '', routeId: '', seatNumber: null, paymentType: '' };
      this.createRequest = null;
      this.createResponse = null;
    } else if (tab === 'update') {
      this.updateData = { id: '', status: '', otp: '', seatNumber: null, paymentType: '' };
      this.updateRequest = null;
      this.updateResponse = null;
    } else if (tab === 'delete') {
      this.deleteData = { id: '' };
      this.deleteRequest = null;
      this.deleteResponse = null;
    }
  }
}
