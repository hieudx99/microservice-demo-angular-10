import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  token = '';
  subject = '';
  authorities = '';


  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.token = this.tokenStorageService.getToken();
    this.subject = this.tokenStorageService.getSubject();
    this.authorities = this.tokenStorageService.getAuthorities();
    console.log(this.authorities);
  }

}
