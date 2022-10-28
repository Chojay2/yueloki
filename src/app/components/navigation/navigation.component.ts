import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone, faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faBars = faBars;
  faXmark = faXmark;
  faEnvelope = faEnvelope;
  contact: boolean = false;


  togglecontact() {
    this.contact = true;
  }
  toggleclose() {
    this.contact = false;
  }

}
