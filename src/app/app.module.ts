import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelDetailComponent } from './screens/hotel-detail/hotel-detail.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './screens/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TestomonialCarouselComponent } from './components/testomonial-carousel/testomonial-carousel.component';
import { EventsComponent } from './components/events/events.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsDetailComponent } from './screens/about-us-detail/about-us-detail.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelDetailComponent,
    NavigationComponent,
    HomeComponent,
    RoomsComponent,
    AboutUsComponent,
    TestomonialCarouselComponent,
    EventsComponent,
    ContactUsComponent,
    ServicesComponent,
    AboutUsDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    FontAwesomeModule,
    NgbAccordionModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
