import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { AddNumPipe } from './addnum.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent , AddNumPipe , KeysPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
