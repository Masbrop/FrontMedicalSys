import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userLoginOn:boolean = false;
  doctor:Doctor;

  constructor(
    private loginService:LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.UserLoginOn.subscribe(
      {
        next:(userLoginOn) =>{
          this.userLoginOn = userLoginOn;
        }
      }
    )
    this.loginService.UserData.subscribe(
      {
        next:(doctor)=>{
          this.doctor=doctor;
        }
      }
    )
  }




}
