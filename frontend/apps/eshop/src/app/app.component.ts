import { Component, OnInit } from '@angular/core';
import { UsersService } from '@eshop/users';

@Component({
  selector: 'eshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'eshop';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.initAppSession();
  }
}
