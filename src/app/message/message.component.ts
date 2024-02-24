import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

  constructor(public sharedService: SharedService) {


  }

  remove(index: any) {
    this.sharedService.count = this.sharedService.count - 1;
    this.sharedService.loggeddata.message.splice(index, 1)
    localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails))

  }
}
