import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { faBed, faHeadset, faDoorOpen, faSquareCheck, faShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class HotelDetailComponent implements OnInit {
  faBed = faBed;
  faHeadset = faHeadset;
  faDoorOpen = faDoorOpen;
  faSquareCheck = faSquareCheck;
  faShield = faShield;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
  categories = ['Family', 'Culture', 'Kids'];
  // details = [
  //   {
  //     icon: "<fa-icon [icon]=\"faBed\"></fa-icon>",
  //     info: "5 beds"
  //   },
  //   {
  //     icon: "faHeadset",
  //     info: "5 beds"
  //   },
  //   {
  //     icon: "faDoorOpen",
  //     info: "5 beds"
  //   },
  //   {
  //     icon: "faSquareCheck",
  //     info: "5 beds"
  //   },
  //   {
  //     icon: "faShield",
  //     info: "5 beds"
  //   }
  // ];

  ngOnInit(): void {
  }

}
