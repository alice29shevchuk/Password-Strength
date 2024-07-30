import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string[] = ['gray', 'gray', 'gray'];

  checkStrength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const password = input.value;
    this.password = password;
    if (password.length === 0) {
      this.strength = ['gray', 'gray', 'gray'];
      return;
    }
    if (password.length < 8) {
      this.strength = ['red', 'red', 'red'];
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      this.strength = ['green', 'green', 'green'];
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.strength = ['yellow', 'yellow', 'gray'];
    } else if (hasLetters || hasDigits || hasSymbols) {
      this.strength = ['red', 'gray', 'gray'];
    } else {
      this.strength = ['gray', 'gray', 'gray'];
    }
  }}
