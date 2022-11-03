import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  constructor(private auth: AuthService) {}
  storeclick(){
    this.auth.getStore();
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
