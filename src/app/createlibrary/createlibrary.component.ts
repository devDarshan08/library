import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { books, libraryname } from '../data';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-createlibrary',
  templateUrl: './createlibrary.component.html',
  styleUrl: './createlibrary.component.scss'
})
export class CreatelibraryComponent {
  library = new libraryname();
  Book = new books();
  userdetails: any[] = [];
  loggeddata: any[] = [];
  @Input() isbook: any;
  books:any[]=[];


  constructor(public modelservice: NgbModal, public activemodel: NgbActiveModal, public toastr: ToastrService, public sharedService: SharedService) {
  }


  ngOnInit() {

    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
    }

  }


  createlibrary() {
    if (!this.library.name) {
      this.sharedService.showToastr(2, 'Plese enter valide username')
    } else {
      this.sharedService.showToastr(0, 'Library created successfully.')
      this.activemodel.close();
      this.sharedService.loggeddata.library.push(this.library);
      localStorage.setItem('registration', JSON.stringify(this.sharedService.userdetails));
    }
  }


  createbook(){
    this.sharedService.selectedItemsauthor = {};
    this.sharedService.selectedItemsbook = {};
    if (!this.Book.name) {
      this.sharedService.showToastr(2, 'Plese enter valide books name')
    }
    if (!this.Book.authorname) {
      this.sharedService.showToastr(2, 'Plese enter valide authorname')
    }else{
      this.activemodel.close();
      this.sharedService.books.push({
        id: this.sharedService.books.length < 1 ? 1 : this.sharedService.books[this.sharedService.books.length - 1].id + 1,
        name:this.Book.name,
        authorname:this.Book.authorname,
        lastdate:{}
      })
      this.sharedService.showToastr(0,'Book added successfully.')
      localStorage.setItem('Books',JSON.stringify(this.sharedService.books))
    }
  }
}
