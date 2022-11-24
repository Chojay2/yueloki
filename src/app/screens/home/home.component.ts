import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faAngleRight = faAngleRight;


  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Hotel Yue Lo Ki is located only a few minutes from the incredible Phobjikha valley' },
      { name: 'keywords', content: 'Yue Lo Ki, phobjikha, hotel phobjikha, hotel yueloki, best hotel bhutan, top hotel, wangdue phodrang, gangtey tshechu, black necked crane festival' }
    ]);
  }

  ngOnInit(): void {
  }

}
