import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(public usersService: UsersService,  private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.usersService.login(user).subscribe(
      res => {
        this.usersService.setToken(res.token);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    )
  }

}
