import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { AboutComponent } from '@app/about/about.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, DashboardComponent, AboutComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
