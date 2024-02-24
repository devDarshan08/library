import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Data } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userdetails: any[] = [];
  login = new Data();

  constructor(public toastr: ToastrService, public sharedService: SharedService,public router : Router ) {
 
    

  }


  ngOnInit() {

    let data = JSON.parse(localStorage.getItem('registration') || '') || [];
    if (data && data.length > 0 && data.every((x: any) => !x.islogin)) {
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['allbooks']);
    }

  }

  loginsubmit() {

    let uname = this.sharedService.userdetails.find(p => p.username == this.login.username)
    let pass = this.sharedService.userdetails.find(p => p.password == this.login.password)

    if (!this.login.username) {
      this.sharedService.showToastr(2, 'Plese enter username');
    } else if (!uname) {
      this.sharedService.showToastr(2, 'Plese enter valid username');
    }

    if (this.login.username && uname) {
      if (!this.login.password) {
        this.sharedService.showToastr(2, 'Plese enter password');
      } else if (!pass) {
        this.sharedService.showToastr(2, 'Plese enter valid password')
      }
    }

    if (this.login.username && this.login.password && uname == pass) {
      uname.islogin = true;
      this.sharedService.showToastr(0, 'Login successfully')
      this.router.navigate([''])
      this.sharedService.sendlogindata(uname);
      localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails))
    }


  }

}
