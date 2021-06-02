import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';
import { Notification } from "../../../../models/noti.model";
@Component({
  selector: 'app-system-list-table',
  templateUrl: './system-list-table.component.html',
  styleUrls: ['./system-list-table.component.scss']
})
export class SystemListTableComponent implements OnInit {
  config = new Notification;
  listActive = [];
  tableData;
  data = [
    {
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 2,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 3,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 4,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 5,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    }


  ];

  constructor(
    private router: ActivatedRoute,
    private notiService: NotificationService,
    private schoolGradeLevel:SchoolGradeLevelService
  ) { }

  classId;
  className;
  gradeId;
  ngOnInit(): void {
    this.classId = +this.router.snapshot.params.classId;
    this.gradeId = +this.router.snapshot.params.gradeId;
    this.tableData = this.config.collumsSystem;
    this.getListNotiAuto();
    this.getClassDetail();

  }
  getClassDetail() {
    this.schoolGradeLevel.getClassOfGrade(this.gradeId).subscribe(res => {
      this.className = res.find(x => x.ClassId === this.classId).Name;
    })
  }
  getListNotiAuto() {
    this.notiService.getListSystemNotiOfClass(this.classId).subscribe(res => {
      this.data = res;
      this.data.forEach((x, index) => {
        x.stt = index + 1;
      });
    })
  }

  handleTableCallback(ev) {
     if(ev.type === 'delete'){
      Swal.fire({
        text: "Bạn muốn xoá thông báo này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.notiService.deleteSystemNotification(ev.item.NotificationId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListNotiAuto();
          })
        }
      })
     }
  }

}
