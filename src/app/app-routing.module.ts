import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDetailComponent } from "./screens/about-us-detail/about-us-detail.component";
import { HotelDetailComponent } from "./screens/hotel-detail/hotel-detail.component";
import { HomeComponent } from "./screens/home/home.component";
import { EventsComponent } from "./components/events/events.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";

const routes: Routes = [
  {path: 'about-us', component: AboutUsDetailComponent},
  {path: 'rooms', component: HotelDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
