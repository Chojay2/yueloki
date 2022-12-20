import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Yueloki Wangduephodrang - Facilities')
    this.meta.updateTag(
      { name: 'description', content: 'We provide facilities such as internet essential room services and safe deposit boxes' }
    );
  }

}
