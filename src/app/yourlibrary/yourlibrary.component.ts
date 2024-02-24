import { Component, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-yourlibrary',
  templateUrl: './yourlibrary.component.html',
  styleUrl: './yourlibrary.component.scss'
})
export class YourlibraryComponent {
  userdetails: any[] = [];

  ngOnInit() {
    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];  
    }
  }

  constructor(public modelservice: NgbModal, public sharedService: SharedService) {
  }

  id(index:number){
    this.sharedService.index = index;
  }

  remove(index:any){
    if(!this.sharedService.loggeddata.library[index].books[0]){
      alert('are you sure?')
      this.sharedService.loggeddata.library.splice(index,1)
      this.sharedService.showToastr(0,'Library removed successfully.')
      localStorage.setItem('registration',JSON.stringify(this.sharedService.userdetails))
    }else{
      this.sharedService.showToastr(1,'Books are available in this library!!');
    }
  }
}
