import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { AuthenticatorComponent } from './shared/authenticator/authenticator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, AuthenticatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GamanExhibit';
}
