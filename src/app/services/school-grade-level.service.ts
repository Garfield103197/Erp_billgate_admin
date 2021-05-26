import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolGradeLevelService {

  constructor(private http: HttpClient) { }
  getListLevel(){
    return this.http.get('api/SchoolLevel').pipe(map((res: any) => res.Payload));
  }
  getGradeOfLevel(level: number){
    return this.http.get(`api/Grade?SchoolLevel=${level}`).pipe(map((res: any) => res.Payload));
  }
  getClassOfGrade(gradeId: number){
    return this.http.get(`api/class?GradeId=${gradeId}`).pipe(map((res: any) => res.Payload));
  }
}
