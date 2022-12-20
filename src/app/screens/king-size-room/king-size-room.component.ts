import { Component, OnInit } from '@angular/core';
import { faBed, faHeadset, faDoorOpen, faSquareCheck, faShield, faWifi, faToiletPortable, faTv, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-king-size-room',
  templateUrl: './king-size-room.component.html',
  styleUrls: ['./king-size-room.component.scss']
})
export class KingSizeRoomComponent implements OnInit {
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
    this.title.setTitle('Yueloki Wangduephodrang - King Size Room')
    this.meta.updateTag(
      { name: 'description', content: 'Pure Bhutanese authentic king size rooms with a single king size bed for couples or a single person' }
    );
  }

}
