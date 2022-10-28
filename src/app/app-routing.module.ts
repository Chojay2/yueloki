import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDetailComponent } from "./screens/about-us-detail/about-us-detail.component";
import { HotelDetailComponent } from "./screens/hotel-detail/hotel-detail.component";
import { HomeComponent } from "./screens/home/home.component";

const routes: Routes = [
  {path: 'about-us', component: AboutUsDetailComponent},
  {path: 'accomodations', component: HotelDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
