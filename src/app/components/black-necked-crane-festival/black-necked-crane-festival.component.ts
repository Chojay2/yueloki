import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-black-necked-crane-festival',
  templateUrl: './black-necked-crane-festival.component.html',
  styleUrls: ['./black-necked-crane-festival.component.scss']
})
export class BlackNeckedCraneFestivalComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Yueloki Wangduephodrang - Black Necked Crane Festival')
    this.meta.updateTag(
      { name: 'description', content: 'The black-necked crane festivals are celebrated every year on 11 November, coinciding with the birth anniversary of His Majesty the fourth King Jigme Singye Wangchuck' }
    );
  }

}
