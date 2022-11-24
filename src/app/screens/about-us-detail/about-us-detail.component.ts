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
      { name: 'description', content: 'One of the best hotels in phobjikha.' },
      { name: 'keywords', content: 'about yue lo ki, history of yue lo ki, yueloki location, hotel yueloki, wangdue phodrang' }
    ]);
  }

  ngOnInit(): void {
  }

}
