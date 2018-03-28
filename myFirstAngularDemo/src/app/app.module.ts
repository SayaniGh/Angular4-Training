import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

const ROUTES:Routes = [
  {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
  },
  {
  path: 'first',
  component: FirstComponent
  }
  ]; 

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
