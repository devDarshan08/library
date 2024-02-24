import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-rentbook',
  templateUrl: './rentbook.component.html',
  styleUrl: './rentbook.component.scss'
})

export class RentbookComponent {
  userdetails: any[] = [];
  diffrence: number | undefined;

  constructor(public modelservice: NgbModal, public toastr: ToastrService, public sharedService: SharedService) {
  
    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
    }
  
  }
  
  ngOnInit() {
    this.sharedService.loggeddata.rentbook.forEach((p: any) => {
      setInterval(() => {
        p.templastdate = this.remaintime(p.lastdate, p.id);
      }, 1000);  
    });
  }

  remaintime(date: any, id: number) {
    let endDate = new Date(date);
    let startDate = new Date();

    let diffrence = endDate.getTime() - startDate.getTime();

    let result = {
      day: Math.floor(diffrence / (1000 * 60 * 60 * 24)),
      hour: Math.floor(diffrence / (1000 * 60 * 60) % 24),
      minute: Math.floor(diffrence / (1000 * 60) % 60),
      second: Math.floor(diffrence / (1000) % 60)
    };

    if (result.day == -1 && result.hour == -1 && result.minute == -1 && result.second == -10) {
      let index = this.sharedService.loggeddata.rentbook.findIndex((p: any) => p.id === id);
      if(this.sharedService.loggeddata.rentbook[index].name){
        this.sharedService.count = this.sharedService.count + 1;
        this.sharedService.message.push(this.sharedService.loggeddata.rentbook[index]);
        this.sharedService.loggeddata.rentbook[index].lastdate = {};
        this.sharedService.books.push(this.sharedService.loggeddata.rentbook[index]);
        this.sharedService.loggeddata.rentbook.splice(index,1);
        this.sharedService.showToastr(3,'Book is time out');
        localStorage.setItem('Books',JSON.stringify(this.sharedService.books));
        localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails));
      }
    }

    return result;
  }


}

