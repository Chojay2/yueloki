import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-gangtey-tshechu',
  templateUrl: './gangtey-tshechu.component.html',
  styleUrls: ['./gangtey-tshechu.component.scss']
})
export class GangteyTshechuComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Yueloki Wangduephodrang - Gangtey Tshechu')
    this.meta.updateTag(
      { name: 'description', content: 'Gangtey Tshechu is a great time of celebration and gathering for the people residing in the nearby villages. Villagers and people from all works of life gather in fully adorned jewels, hand-woven dresses, and the brightest smiles' }
    );
  }

}
