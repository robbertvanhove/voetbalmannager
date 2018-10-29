import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  user:User;
  
  @Input() title: String;
  constructor(public authService: AuthService) { }

  
  ngOnInit() {
    this.authService.userData$.subscribe( data => this.user = data);
  }

}
