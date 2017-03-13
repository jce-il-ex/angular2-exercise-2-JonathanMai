import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }
  list = [{txt: 'Home'}, {txt: 'Games'}, {txt: 'Images'}, {txt: 'Contact us'}, ]

  ngOnInit() {
  }

}
