import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Our experience and and some of the services at yueloki include, picnic and hoisting prayer flags, mountain biking, nature trekking and morning and evening prayers' },
      { name: 'keywords', content: 'YueLoKi, phobjikha, yueloki, hotelyueloki, hotelwangdue, tophotel, wangduephodrang, gangtey' }
    ]);
  }

  ngOnInit(): void {
  }

}
