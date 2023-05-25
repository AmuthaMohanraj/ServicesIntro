import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TesttwoComponent } from './testtwo/testtwo.component';
import { FormsModule } from '@angular/forms';
import { ServicesService } from './services.service';
import { ServicetestComponent } from './servicetest/servicetest.component';
import { Servicetest2Component } from './servicetest2/servicetest2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TesttwoComponent,
    ServicetestComponent,
    Servicetest2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
