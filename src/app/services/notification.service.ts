import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private http: HttpClient) { }
  getListAnnounce(keyword: any){
    return this.http.get(`api/announcement?keyword=${keyword}`).pipe(map((res: any) => res));
  }
  getListSystemNotiOfClass(classId){
    return this.http.get(`api/Notification/class?classId=${classId}`).pipe(map((res: any) => res));
  }
  createNotification(data: any){
    return this.http.post('api/announcement', data).pipe(map((res: any) => res));
  }
  editNotification(announcementId: any, data){
    return this.http.put(`api/announcement/${announcementId}`, data).pipe(map((res: any) => res));
  }
  deleteNotification(announcementId){
    return this.http.delete(`api/announcement/${announcementId}`).pipe(map((res: any) => res));
  }
  deleteSystemNotification(notificationId){
    return this.http.delete(`api/Notification/${notificationId}`).pipe(map((res: any) => res));
  }
}
