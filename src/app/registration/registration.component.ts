import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { userdata } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  singup = new userdata();
  userdetails: any[] = [];

  constructor(public toastr: ToastrService, public sharedService: SharedService, public router: Router) {
  }


  ngOnInit() {

    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
    }

  }


  singupsubmit(issingup: boolean) {

    let mno_code = /^\d{10}$/;
    let email_code = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
    let pass_code = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

    if (!this.singup.username) {
      this.sharedService.showToastr(2, 'Plese enter valid username')
    }

    if (!this.singup.name) {
      this.sharedService.showToastr(2, 'Plese enter valid name')
    }

    if (!mno_code.test(this.singup.mobile)) {
      this.sharedService.showToastr(2, 'Plese enter valid mobile number')
    }

    if (!email_code.test(this.singup.email)) {
      this.sharedService.showToastr(2, 'Plese enter valid email')
    }

    if (!pass_code.test(this.singup.password) || !this.singup.password) {
      this.sharedService.showToastr(2, 'Password must be required 1charecter ,1number & 1apecial charecter')
    }

    if (this.singup.co_password != this.singup.password || !this.singup.co_password) {
      this.sharedService.showToastr(2, 'Plese enter valid confirm-password')
    }

    if (!this.singup.email) {
      this.sharedService.showToastr(2, 'Plese enter valid email')
    }


    else {
      if (this.singup.username != "") {
        let len = 0;

        this.userdetails.filter((p: any) => {
          if (p.username == this.singup.username) {
            len = len + 1;
          }
        });
        if (len < 1) {
          this.sharedService.userdetails.push({
            id: this.userdetails.length < 1 ? 1 : this.userdetails[this.userdetails.length - 1].id + 1,
            username: this.singup.username,
            name: this.singup.name,
            mobile: this.singup.mobile,
            email: this.singup.email,
            password: this.singup.password,
            co_password: this.singup.co_password,
            library: [],
            rentbook: [],
            islogin: false
          });
          this.sharedService.showToastr(0, 'Registration successfully.');
          localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails));
          this.router.navigate(['login']);
          this.singup = new userdata();

        } else {
          this.sharedService.showToastr(1, 'Username alredy exist!')
        }

      }
    }

  }

}
