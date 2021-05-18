import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/utils/animations/fader.animation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    // <-- add your animations here
    fader,
  ],
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;

  dataNav = {
    list: [
      {
        icon: 'assets/img/distributor.svg',
        name: 'Thành viên',
        linkURL: 'member',
      },
      {
        icon: 'assets/img/bag.svg',
        name: 'Thời khóa biểu',
        linkURL: 'schedule',
      },
      {
        icon: 'assets/img/enterprise-code.svg',
        name: 'Thực đơn',
        linkURL: 'menu',
      },
      {
        icon: 'assets/img/distributor.svg',
        name: 'Thông báo',
        linkURL: 'notification',
      },
      {
        icon: 'assets/img/shop.svg',
        name: 'Tin tức',
        linkURL: 'news',
      },
    ],
  };
  constructor() { }

  ngOnInit(): void { }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
