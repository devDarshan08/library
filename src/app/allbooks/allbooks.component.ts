import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { ModalComponent } from '../modal/modal.component';
import { CreatelibraryComponent } from '../createlibrary/createlibrary.component';
import { LogoutComponent } from '../logout/logout.component';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrl: './allbooks.component.scss'
})
export class AllbooksComponent {
  dropdownSettings = {};
  dropdownSettings1 = {};
  refbook: any[] = [];
 

  constructor(public modelservice: NgbModal, public toastr: ToastrService, public sharedService: SharedService, public router: Router) {

    if (localStorage.getItem('Books')) {
      this.sharedService.books = JSON.parse(localStorage.getItem('Books') || '') || [];
    }
    let data = JSON.parse(localStorage.getItem('registration') || '') || [];
    if (data && data.length >= 0 && data.every((x: any) => !x.islogin)) {
      this.router.navigate(['login']);
    }

  }


  ngOnInit() {


    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownSettings1 = {
      singleSelection: true,
      idField: 'id',
      textField: 'authorname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  rent(isrent: boolean, r: any) {

    let modelreftrue = this.modelservice.open(ModalComponent, {
      size: 'md',
      backdrop: 'static',
      centered: true
    });
    modelreftrue.componentInstance.isrent = true;
    modelreftrue.componentInstance.r = r;

  }


  addto(isrent: boolean, i: any) {
    let modelreftrue = this.modelservice.open(ModalComponent, {
      size: 'md',
      backdrop: 'static',
      centered: true
    });
    modelreftrue.componentInstance.isrent = false;
    modelreftrue.componentInstance.i = i;
  }


  addbook(isbook: boolean) {
    let modelreftrue = this.modelservice.open(CreatelibraryComponent, {
      size: 'md',
      backdrop: 'static',
      centered: true
    });
    modelreftrue.componentInstance.isbook = true;
  }

  remove(index: number) {
    alert('are you sure?');
    this.sharedService.books.splice(index, 1);
    this.sharedService.showToastr(0, 'Book removed successfully.')
    localStorage.setItem('Books', JSON.stringify(this.sharedService.books))
  }


  edit(isedite: boolean, i: any) {
    let modelreftrue = this.modelservice.open(LogoutComponent, {
      size: 'md',
      backdrop: 'static',
      centered: true
    });
    modelreftrue.componentInstance.isedite = true;
    modelreftrue.componentInstance.i = i;
  }

  selectedbook(value: any) {

    this.sharedService.showselectedbook = [];
    this.sharedService.selectbook = [];
    this.refbook.filter((p) => {
      if (p.name == value.name) {
        this.sharedService.showselectedbook.push(p)
        if (this.sharedService.showselectedbook) {
          this.sharedService.storebook = [];
          this.refbook.filter((p) => {
            if (p.name == this.sharedService.showselectedbook[0].name) {
              this.sharedService.storebook.push(p);
              console.log(this.sharedService.storebook);
            }
          })
        }
      }
    })
  }

  deselectbook(value: any) {
    this.sharedService.storebook = [];
    this.sharedService.storebook = this.refbook
  }

  selectedauthor(value: any) {
    this.sharedService.selectedItemsbook = {};
    this.refbook = [];
    this.sharedService.storebook = [];
    this.sharedService.selectbook = [];
    this.sharedService.books.filter((p) => {
      if (p.authorname == value.authorname) {
        this.sharedService.selectbook.push(p);
        this.refbook = this.sharedService.selectbook;
      }
    })
  }

  deselectauthor(value: any) {
    this.sharedService.selectbook = [];
    this.sharedService.storebook = [];
    this.refbook = [];
    this.sharedService.selectbook = this.sharedService.books;
    this.sharedService.selectedItemsbook = {};
    this.sharedService.selectedItemsbook = {};
  }


}
