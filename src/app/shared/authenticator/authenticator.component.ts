import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authenticator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css'],
})
export class AuthenticatorComponent {
  jwtToken: string | null = '';
  showModal = false;

  @ViewChild('jwtTokenInput') jwtTokenInputRef!: ElementRef<HTMLInputElement>;

  constructor() {
    this.jwtToken = this.getLocalStorageItem('jwtToken') || '';
  }

  openModal(): void {
    this.showModal = true;
    setTimeout(() => {
      this.jwtTokenInputRef.nativeElement.focus();
    }, 0);
  }

  closeModal(): void {
    this.showModal = false;
  }

  saveToken(): void {
    if (this.jwtToken) {
      this.setLocalStorageItem('jwtToken', this.jwtToken);
    } else {
      this.removeLocalStorageItem('jwtToken');
    }
    this.closeModal();
  }

  clearToken(): void {
    this.jwtToken = '';
  }

  handleEnterPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.saveToken();
    }
  }

  private getLocalStorageItem(key: string): string | null {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.removeItem(key);
    }
  }
}
