import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { faBullseye, faEye, faGem } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about-us-detail',
  templateUrl: './about-us-detail.component.html',
  styleUrls: ['./about-us-detail.component.scss']
})
export class AboutUsDetailComponent implements OnInit {
  faBullseye = faBullseye;
  faEye = faEye;
  faGem = faGem;

  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Hotel Yue Lo Ki was established in 2010 as a small guest house with six rooms and five staff.' },
      { name: 'keywords', content: 'YueLoKi, phobjikha, yueloki, hotelyueloki, hotelwangdue, tophotel, wangduephodrang, gangtey' }
    ]);
  }

  ngOnInit(): void {
  }

}
