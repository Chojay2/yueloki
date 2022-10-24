import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateY(-100%)' }),
        animate(500, style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(500, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class NavigationComponent {
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faBars = faBars;
  faXmark = faXmark;
  navbarOpen: boolean = false;

}
