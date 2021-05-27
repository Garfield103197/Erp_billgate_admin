import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) { }
  getListStudentClass(classId){
    return this.http.get(`api/student?ClassId=${classId}`).pipe(map((res: any) => res.Payload));
  }
  createStudent(data){
    return this.http.post('api/Account/RegisterParentWithStudent', data).pipe(map((res: any) => res));
  }
  editStudent(studentId, data){
    return this.http.put(`api/student/${studentId}`, data).pipe(map((res: any) => res));
  }
  deleteStudent(studentId){
    return this.http.delete(`api/student/${studentId}`).pipe(map((res: any) => res));
  }
}
