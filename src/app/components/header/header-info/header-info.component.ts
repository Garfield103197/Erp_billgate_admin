import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileModel } from 'src/app/models/profile/profile.model';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  @Input() dataHeaderInfo;
  profile: Observable<ProfileModel>;
  constructor(
    private route: Router,
    private profileService: ProfileService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProfile()

  }

  btnLogout() {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất không?',
      text: "",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Không',
      confirmButtonText: 'Có',

    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        this.route.navigate(['']);
      }
    })

  }
  getProfile() {
    this.profile = JSON.parse(localStorage.getItem('access_user'));
  }
  changePassword(): void {
    this.dialog.open(ChangePasswordComponent, {
      data: {}
    })
      .afterClosed()
      .subscribe(() => { })
  }

}
