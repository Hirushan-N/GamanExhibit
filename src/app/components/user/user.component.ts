import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';
import { UserService } from '../../services/user.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpDisplayComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  // Data models for each operation
  registerData = { username: '', password: '', email: '', role: 'commuter' };
  searchFilters = { username: '', email: '', role: '' };
  updateData = { id: '', username: '', email: '', role: '' };
  deleteData = { id: '' };

  // Request and Response Objects for each operation
  registerRequest: any = null;
  registerResponse: any = null;

  searchRequest: any = null;
  searchResponse: any = null;

  updateRequest: any = null;
  updateResponse: any = null;

  deleteRequest: any = null;
  deleteResponse: any = null;

  constructor(
    private userService: UserService,
    private loggerService: LoggerService
  ) {}

  // Register User
  onRegisterUser(): void {
    this.userService.registerUser(this.registerData).subscribe(
      () => {
        this.registerRequest = this.loggerService.getRequest();
        this.registerResponse = this.loggerService.getResponse();
      },
      () => {
        this.registerRequest = this.loggerService.getRequest();
        this.registerResponse = this.loggerService.getResponse();
      }
    );
  }

  // Search Users
  onSearchUsers(): void {
    this.userService.searchUsers(this.searchFilters).subscribe(
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

  // Update User
  onUpdateUser(): void {
    this.userService.updateUser(this.updateData.id, this.updateData).subscribe(
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

  // Delete User
  onDeleteUser(): void {
    this.userService.deleteUser(this.deleteData.id).subscribe(
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

  // Reset the data for a specific tab
  onReset(tab: string): void {
    if (tab === 'register') {
      this.registerData = { username: '', password: '', email: '', role: 'commuter' };
      this.registerRequest = null;
      this.registerResponse = null;
    }
    if (tab === 'search') {
      this.searchFilters = { username: '', email: '', role: '' };
      this.searchRequest = null;
      this.searchResponse = null;
    }
    if (tab === 'update') {
      this.updateData = { id: '', username: '', email: '', role: '' };
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
