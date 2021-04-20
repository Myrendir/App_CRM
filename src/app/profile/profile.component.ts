import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private serviceVar: any;

  constructor() {
  }

  changePassword(f): void {
    const {old_pwd, new_pwd} = f.value;
    this.serviceVar
      .changePassword({old_pwd, new_pwd})
      .subscribe(
        () => console.log('change_pwd: success'),
        () => console.log('change_pwd: problem occured'));
  }

  ngOnInit(): void {

  }

}
