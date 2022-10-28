import { Component, OnInit } from '@angular/core';
import { faXmark, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  faXmark = faXmark;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
