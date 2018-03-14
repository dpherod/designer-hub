import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactDetails = 'Phone: (720) 502-3346 | Email: info@designerhub.com';
  copyright = `© Copyright DesignerHub 2018 - All rights reserved`;

  constructor() { }

  ngOnInit() {
  }

}
