// ================================================
// CORE MODULE can be used for things singleton services like auth, toast messages, error handling, utility services (datetime/data manipulation), storage services, and other stuff that provides data accessible throughout app. Can be thought of as the parent feature module for all of our content which will be added to our application.
// ================================================

import { NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthService,
    HttpService,
    // eventually local storage service, 
    // eventually Firebase service
  ]
})
export class CoreModule { }
