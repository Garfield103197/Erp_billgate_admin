import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';

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

    constructor() { }

    ngOnInit(): void {
        this.tableData = this.config.collumsClass;
        this.listActive = this.config.btnActice;

    }

    handleTableCallback(ev) {

    }
}
