import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  isCollapsed = false;
  username = '';
  constructor(private tokenStorageService: TokenStorageService, private router: Router){ }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      this.username = this.tokenStorageService.getSubject();
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
    
  }
  reloadPage(): void {
    window.location.reload();
  }
}
