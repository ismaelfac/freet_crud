import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  existUser: boolean = false;
  user: any = [];
  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged(){
    this.usersService.getUser().subscribe(
      res => {
        this.existUser = true;
        this.user = res;
      },
      err => console.error(err)
    )
  }

}
