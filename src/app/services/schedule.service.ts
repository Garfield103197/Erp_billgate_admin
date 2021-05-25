import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getScheduleOfClass(classId, startDate){
    return this.http.get(`api/TimeTableLesson?ClassId=${classId}&StartDate=${startDate}`).pipe(map((res: any) => res));
  }
  uploadTimeTableLesson(data){
    return this.http.post('api/TimeTableLesson/upload', data).pipe(map((res: any) => res));
  }
}
