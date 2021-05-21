import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from 'src/app/models/news.model';
import { CreateMemberComponent } from '../create-member/create-member.component';

@Component({
    selector: 'app-member-detail',
    templateUrl: './member-detail.component.html',
    styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
    config = new News;
    listActive = [];
    tableData;
    data = [
        {
            "stt": 1,
            "name": "Trần Quang Minh",
            "dob": "15/04/2021",
            "gender": "Nam",
            "class": "6A1",
            "code": "BG1234567",
            "phone": "123456789",
            "address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
        },
        {
            "stt": 2,
            "name": "Trần Quang Minh",
            "dob": "15/04/2021",
            "gender": "Nam",
            "class": "6A1",
            "code": "BG1234567",
            "phone": "123456789",
            "address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
        },
        {
            "stt": 3,
            "name": "Trần Quang Minh",
            "dob": "15/04/2021",
            "gender": "Nam",
            "class": "6A1",
            "code": "BG1234567",
            "phone": "123456789",
            "address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
        },


    ];

    constructor(
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.tableData = this.config.collumsClass;
        this.listActive = this.config.btnActice;

    }

    handleTableCallback(ev) {
        if (ev.type === 'create') {
            return this.dialog.open(CreateMemberComponent, {
              width: '500px',
              height: '750px'
            }).afterClosed().subscribe(result => {
            });
          }

    }
}
