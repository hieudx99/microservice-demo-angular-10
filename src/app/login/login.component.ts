import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: '', 
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username = '';
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getSubject();
      this.router.navigate(["/welcome"]);
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);
        //console.log(data.headers);
        //console.log(data.headers.get('Authorization'));
        this.tokenStorage.saveToken(data.headers.get('Authorization'));
        // console.log(this.tokenStorage.getToken());
        // console.log(this.tokenStorage.getDecodedAcessToken());
        this.username = this.tokenStorage.getSubject();
        // console.log(this.tokenStorage.getAuthorities());
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/welcome']).then(()=>window.location.reload());
        //this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
