import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userdetails: any[] = [];
  loggeddata: any;
  sidebar: boolean = false;
  books: any[] = [];
  index: any;
  time: any;
  message: any[] = [];
  timeoutbooks:any[]=[];
  count: number = 0;
  logindata = new Subject();
  selectbook:any[]=[];
  selectauthor:any[]=[];
  showselectedbook:any[]=[];
  storebook:any[]=[];
  selectedItemsbook = {};
  selectedItemsauthor = {};
  constructor(public toastr: ToastrService) {

    if (localStorage.getItem('registration')) {
      this.userdetails = JSON.parse(localStorage.getItem('registration') || '') || [];
      this.userdetails.find((p: any) => {
        if (p.islogin == true) {
          this.loggeddata = p;
        }
      })
  
    }

    if (localStorage.getItem('Books')) {
      this.books = JSON.parse(localStorage.getItem('Books') || '') || [];
    }

  }

  sendlogindata(data:any){
    this.logindata.next(data);
  }

  ngOnInit() {
    
  }


  showToastr(responseCode: number, message: string, enableHtml: boolean = false, timeOut: number = 4000) {
    const toastSetting: Partial<IndividualConfig> = {
      progressBar: true,
      closeButton: true,
      enableHtml: true,
      timeOut
    };
    if (responseCode === 0) {
      this.toastr.success(message, 'Success', toastSetting);
    } else if (responseCode === 1) {
      this.toastr.warning(message, 'Warning', toastSetting);
    } else if (responseCode === 2) {
      this.toastr.error(message, 'Error', toastSetting);
    } else if (responseCode === 3) {
      this.toastr.info(message, 'Info', toastSetting);
    } else {
      this.toastr.error(message, 'Error', toastSetting);
    }
  }
}
