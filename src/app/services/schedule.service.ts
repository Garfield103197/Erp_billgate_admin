import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getScheduleOfClass(classId, startDate){
    return this.http.get(`api/TimeTableLesson?ClassId=${classId}&StartDate=${startDate}`).pipe(map((res: any) => res.Payload));
  }
  uploadTimeTableLesson(data){
    return this.http.post('api/TimeTableLesson/upload', data).pipe(map((res: any) => res.Payload));
  }
  editTimeTableLesson(timeTableLessonId, data){
    return this.http.put(`api/TimeTableLesson/${timeTableLessonId}`, data).pipe(map((res: any) => res.Payload));
  }
  getListSubject(){
    return this.http.get('api/subjects').pipe(map((res: any) => res.Payload));
  }
  editMultiTimeTable(data){
    return this.http.put('api/TimeTableLesson/bulkPut', data).pipe(map((res: any) => res.Payload));
  }
}
