import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EnrollAdminComponent } from './enroll-admin/enroll-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EnrollAdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
