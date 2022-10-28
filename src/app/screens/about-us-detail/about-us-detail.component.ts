import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
