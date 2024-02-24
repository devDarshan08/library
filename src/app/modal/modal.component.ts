import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isrent: any;
  @Input() i: any;
  @Input() r: any;
  userdetails: any[] = [];
  loggeddata: any[] = [];
  selected: any;
  Date: string = '';
  currentDate = new Date();
  daysCount: number | undefined;
  hourscount: number | undefined;
  minutecount: number | undefined;
  secondcount: number | undefined;
  diffrence: any;
  startvalue: string = '';
  endvalue: string = '';
  minDate: string = '';



  ngOnInit() {

    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
      this.loggeddata[0] = this.sharedService.loggeddata[0]
    }
    this.sharedService.books
  }


  constructor(public modelservice: NgbModal, public activemodel: NgbActiveModal, public toastr: ToastrService, public sharedService: SharedService) {

    this.minDate = new Date().toISOString().slice(0, 16);

  }


  rent() {
    if (this.Date) {

      this.sharedService.books[this.r].lastdate = this.Date;
      this.sharedService.loggeddata.rentbook.push(this.sharedService.books[this.r])
      this.sharedService.books.splice(this.r,1)
      localStorage.setItem('Books',JSON.stringify(this.sharedService.books))
      localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails))
      this.sharedService.showToastr(0, 'Book added successfully.')
      this.activemodel.close();
    } else {
      this.sharedService.showToastr(2, 'Please enter valide date!')
    }
  }

  addto() {
    if (this.selected) {
      this.sharedService.showToastr(0, 'Book added successfully.')
      this.activemodel.close();
    } else {
      this.sharedService.showToastr(2, 'Plese select any library!')
    }
  }

  select(event: any) {
    this.selected = event.target.value
    this.sharedService.loggeddata.library[this.selected].books.push(this.sharedService.books[this.i]);
    localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails))
  }

}


