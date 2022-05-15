import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public usersService: UsersService,  private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.usersService.register(user).subscribe(
      res => {
        this.usersService.setToken(res.token);
        this.router.navigate(['login']);
      }, 
      err => console.error(err)
    );
  }

}
