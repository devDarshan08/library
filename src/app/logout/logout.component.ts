import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { books } from '../data';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
@Input() islogout:any;
@Input() isedite:any;
@Input() i:any;
Book = new books();

  constructor(public toastr: ToastrService, public sharedService: SharedService, public router:Router, public activemodel: NgbActiveModal) {
    
  }


  logout(){
    if (this.sharedService.loggeddata) {
      this.sharedService.userdetails.filter((p:any)=>{
        if(p.islogin == true){
          p.islogin = false;                      
        }
      })
      this.sharedService.sendlogindata('');
      this.activemodel.close();
      this.sharedService.showToastr(0, 'Logout Successfully');
      this.router.navigate(['login']);
      localStorage.setItem('registration',JSON.stringify(this.sharedService.userdetails))
    }
  }

  edit(){
    let update = this.sharedService?.books[this.i];
    this.sharedService.books[this.i].name = update.name;
    this.sharedService.books[this.i].authorname = update.authorname; 
    this.activemodel.close();
    this.sharedService.showToastr(0,'Book edited successfully.')
    localStorage.setItem('Books',JSON.stringify(this.sharedService.books))
  }
}
