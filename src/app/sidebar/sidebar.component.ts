import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { libraryname } from '../data';
import { CreatelibraryComponent } from '../createlibrary/createlibrary.component';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  userdetails: any[] = [];
  loginddata: any;
  library = new libraryname();
  username: string = "";


  ngOnInit() {

    this.sharedService?.logindata.subscribe(p=>{
      this.sharedService.loggeddata = p;
    })

    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
    }
  }

  constructor(public modelservice: NgbModal, public toastr: ToastrService, public sharedService: SharedService, public router : Router) {
    
  }


  logout(islogout:boolean) {
    let modelreftrue = this.modelservice.open(LogoutComponent, {
      size: 'md',
      backdrop: 'static',
      centered: true
    });
    modelreftrue.componentInstance.islogout=true


  }

  createlibrary() {
    if (this.sharedService.loggeddata) {
      let modelreftrue = this.modelservice.open(CreatelibraryComponent, {
        size: 'md',
        backdrop: 'static',
        centered: true
      });
      
    } 
  }


}
