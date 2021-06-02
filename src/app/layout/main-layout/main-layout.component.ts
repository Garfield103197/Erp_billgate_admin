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
        icon: 'assets/svg/icon-schedule.svg',
        name: 'Thời khóa biểu',
        linkURL: 'schedule',
      },
      {
        icon: 'assets/svg/icon-menu.svg',
        name: 'Thực đơn',
        linkURL: 'menu',
      },
      {
        icon: 'assets/svg/icon-nofitication.svg',
        name: 'Thông báo',
        linkURL: 'notification',
      },
      {
        icon: 'assets/svg/icon-news.svg',
        name: 'Tin tức',
        linkURL: 'news',
      },
      {
        icon: 'assets/svg/icon-document.svg',
        name: 'Tài liệu',
        linkURL: 'document',
      },
      {
        icon: 'assets/svg/icon-feedback.svg',
        name: 'Góp ý',
        linkURL: 'feedback',
      },
      {
        icon: 'assets/svg/icon-student-report.svg',
        name: 'Sổ điểm',
        linkURL: 'gradebook',
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
