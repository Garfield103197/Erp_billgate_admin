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
        icon: 'assets/img/home.svg',
        name: 'Thành viên',
        linkURL: 'home',
      },
      {
        icon: 'assets/img/bag.svg',
        name: 'Thời khóa biểu',
        linkURL: 'product',
      },
      {
        icon: 'assets/img/enterprise-code.svg',
        name: 'Thực đơn',
        linkURL: 'enterprise',
      },
      {
        icon: 'assets/img/distributor.svg',
        name: 'Thông báo',
        linkURL: 'distributor',
      },
      {
        icon: 'assets/img/shop.svg',
        name: 'Tin tức',
        linkURL: 'shop',
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
