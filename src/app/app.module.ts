import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//manually added 
//reactive forms module for creating the module...
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
