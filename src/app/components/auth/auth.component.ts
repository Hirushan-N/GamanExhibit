import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoggerService } from '../../services/logger.service';
import { HttpDisplayComponent } from '../../shared/http-display/http-display.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpDisplayComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  loginData = { username: '', password: '' };
  requestObject: any = null;
  responseObject: any = null;

  constructor(
    private authService: AuthService,
    private loggerService: LoggerService
  ) {}

  onLogin(): void {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe(
      () => {
        this.requestObject = this.loggerService.getRequest(); // Fetch captured request
        this.responseObject = this.loggerService.getResponse(); // Fetch captured response
      },
      () => {
        this.requestObject = this.loggerService.getRequest(); // Fetch captured request
        this.responseObject = this.loggerService.getResponse(); // Fetch captured response
      }
    );
  }

  onReset(): void {
    // Reset the form data and request/response objects
    this.loginData = { username: '', password: '' };
    this.requestObject = null;
    this.responseObject = null;
  }
}
