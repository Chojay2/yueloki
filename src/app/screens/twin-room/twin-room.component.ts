import { Component, OnInit } from '@angular/core';
import { faBed, faHeadset, faDoorOpen, faSquareCheck, faShield, faWifi, faToiletPortable, faTv, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-twin-room',
  templateUrl: './twin-room.component.html',
  styleUrls: ['./twin-room.component.scss']
})
export class TwinRoomComponent implements OnInit {
  faBed = faBed;
  faHeadset = faHeadset;
  faDoorOpen = faDoorOpen;
  faSquareCheck = faSquareCheck;
  faShield = faShield;
  faWifi = faWifi;
  faToiletPortable = faToiletPortable;
  faTv = faTv;
  faBowlFood = faBowlFood;

  constructor(config: NgbRatingConfig, private meta: Meta) {

    this.meta.addTags([
      { name: 'description', content: 'Pure Bhutanese authentic rooms' },
      { name: 'keywords', content: 'YueLoKi, phobjikha, yueloki, hotelyueloki, hotelwangdue, tophotel, wangduephodrang, gangtey', }
    ]);

    config.max = 5;
    config.readonly = true;
  }
  categoryDoubleRoom = ['Couple', 'Single person'];
  categories = ['Family', 'Culture', 'Kids'];

  ngOnInit(): void {
  }

}
