import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorganDetailsComponent } from './morgan-details/morgan-details.component';
import { MorganNavbarComponent } from './morgan-navbar/morgan-navbar.component';
import { MorganSidebarComponent } from './morgan-sidebar/morgan-sidebar.component';
import { IconCardsComponent } from './body/icon-cards/icon-cards.component';
import { ChartAreaComponent } from './body/chart-area/chart-area.component';
import { MorganLoginComponent } from './morgan-login/morgan-login.component';
import { MorganBodyComponent } from './morgan-body/morgan-body.component';
import { DashboardComponent } from './sidebar/dashboard/dashboard.component';
import { PagesComponent } from './sidebar/pages/pages.component';
import { ChartsComponent } from './sidebar/charts/charts.component';
import { TablesComponent } from './sidebar/tables/tables.component';
import { FiltersComponent } from './sidebar/filters/filters.component';
import { NotificationsComponent } from './navbar/notifications/notifications.component';
import { MessagesComponent } from './navbar/messages/messages.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { SearchForComponent } from './navbar/search-for/search-for.component';
import { RegisterComponent } from './login-pages/register/register.component';
import { ForgotPasswordComponent } from './login-pages/forgot-password/forgot-password.component';
import { Error404Component } from './secondary-pages/error404/error404.component';
import { BlankComponent } from './secondary-pages/blank/blank.component';
import { DetailsComponent } from './body/details/details.component';
import { CostTableComponent } from './body/cost-table/cost-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MorganDetailsComponent,
    MorganNavbarComponent,
    MorganSidebarComponent,
    IconCardsComponent,
    ChartAreaComponent,
    MorganLoginComponent,
    MorganBodyComponent,
    PagesComponent,
    ChartsComponent,
    TablesComponent,
    DashboardComponent,
    NotificationsComponent,
    MessagesComponent,
    ProfileComponent,
    SearchForComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    Error404Component,
    BlankComponent,
    DetailsComponent,
    CostTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }
