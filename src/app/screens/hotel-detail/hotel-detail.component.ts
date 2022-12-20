import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { faBed, faHeadset, faDoorOpen, faSquareCheck, faShield, faWifi, faToiletPortable, faTv, faBowlFood } from '@fortawesome/free-solid-svg-icons';

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
  faWifi = faWifi;
  faToiletPortable = faToiletPortable;
  faTv = faTv;
  faBowlFood = faBowlFood;

  constructor(config: NgbRatingConfig, private meta: Meta, private title: Title) {

    config.max = 5;
    config.readonly = true;
  }
  categoryDoubleRoom = ['Couple', 'Single person'];
  categories = ['Family', 'Culture', 'Kids'];

  ngOnInit(): void {
    this.title.setTitle('Yueloki Wangduephodrang - Rooms')
    this.meta.updateTag(
      { name: 'description', content: 'Pure Bhutanese authentic rooms' }
    );
  }

}
