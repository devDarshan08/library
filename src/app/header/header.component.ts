import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userdetails: any[] = [];
  loggeddata:any;
  loginuser:any[]=[];
  constructor(public modelservice: NgbModal, public sharedService: SharedService) {}

  ngOnInit() {
    
    this.sharedService?.logindata.subscribe(p=>{
      this.sharedService.loggeddata = p;
    })
  }


}
