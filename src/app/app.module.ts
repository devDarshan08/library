import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CreatelibraryComponent } from './createlibrary/createlibrary.component';
import { YourlibraryComponent } from './yourlibrary/yourlibrary.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { ModalComponent } from './modal/modal.component';
import { RentbookComponent } from './rentbook/rentbook.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LibrarybooksComponent } from './librarybooks/librarybooks.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedService } from './shared.service';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CreatelibraryComponent,
    YourlibraryComponent,
    AllbooksComponent,
    ModalComponent,
    RentbookComponent,
    LibrarybooksComponent,
    MessageComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({ preventDuplicates: true, enableHtml:true }),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
