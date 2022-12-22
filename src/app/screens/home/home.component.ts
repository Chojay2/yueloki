import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { faAngleRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faAngleRight = faAngleRight;
  faArrowRightLong = faArrowRightLong;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  pauseOnFocus = false;

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Yueloki Wangduephodrang');
    this.meta.addTags([
      { name: 'description', content: 'Hotel Yue Lo Ki is located only a few minutes from the incredible Phobjikha valley' },
      { name: 'keywords', content: 'YueLoKi, phobjikha, yueloki, hotelyueloki, hotelwangdue, tophotel, wangduephodrang, gangtey' }
    ]);
  }

}
