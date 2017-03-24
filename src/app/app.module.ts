import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';

import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TestdirectiveDirective } from './testdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    SnackbarComponent,
    TestdirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
