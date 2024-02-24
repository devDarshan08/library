import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-librarybooks',
  templateUrl: './librarybooks.component.html',
  styleUrl: './librarybooks.component.scss'
})
export class LibrarybooksComponent {
  userdetails: any[] = [];
  loggeddata: any[] = [];
  libraryindex:number=0;

  constructor(public toastr: ToastrService, public sharedService: SharedService) {
  }

  ngOnInit() {

    this.libraryindex = this.sharedService.index;
    

    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
    }
  }

  removebook(index:any){
    alert('are you sure?');
    this.sharedService.loggeddata.library[this.libraryindex].books.splice(index,1);
    this.sharedService.showToastr(0,'Book removed successfully.')
    localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails));
  }
}
