// ================================================
// CORE MODULE can be used for things singleton services like auth, toast messages, error handling, utility services (datetime/data manipulation), storage services, and other stuff that provides data accessible throughout app. Can be thought of as the parent feature module for all of our content which will be added to our application.
// ================================================

import { NgModule } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { HttpService } from '../services/http/http.service';


@NgModule({
  providers: [
    AuthService,
    HttpService
  ]
})
export class CoreModule { }
