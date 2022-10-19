import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelDetailComponent } from './screens/hotel-detail/hotel-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelDetailComponent,
    NavigationComponent,
    HomeComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    FontAwesomeModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
