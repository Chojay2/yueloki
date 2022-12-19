import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDetailComponent } from "./screens/about-us-detail/about-us-detail.component";
import { HotelDetailComponent } from "./screens/hotel-detail/hotel-detail.component";
import { HomeComponent } from "./screens/home/home.component";
import { EventsComponent } from "./components/events/events.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import {
  BlackNeckedCraneFestivalComponent
} from "./components/black-necked-crane-festival/black-necked-crane-festival.component";
import { GangteyTshechuComponent } from "./components/gangtey-tshechu/gangtey-tshechu.component";
import { FacilityComponent } from "./screens/facility/facility.component";
import { KingSizeRoomComponent } from "./screens/king-size-room/king-size-room.component";
import { TwinRoomComponent } from "./screens/twin-room/twin-room.component";

const routes: Routes = [
  {path: 'about-us', component: AboutUsDetailComponent},
  {path: 'rooms', component: HotelDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'black-necked-crane-festival', component: BlackNeckedCraneFestivalComponent},
  {path: 'gangtey-tshechu', component: GangteyTshechuComponent},
  {path: 'facilities', component: FacilityComponent},
  {path: 'king-size-room', component: KingSizeRoomComponent},
  {path: 'twin-room', component: TwinRoomComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
