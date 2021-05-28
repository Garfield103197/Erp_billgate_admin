import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getHomeWorkOfClass(classId, keyword){
    return this.http.get(`api/homework?ClassId=${classId}&keyword=${keyword}`).pipe(map((res: any) => res.Payload));
  }
  uploadHomeWork(data){
    return this.http.post('api/homework', data).pipe(map((res: any) => res));
  }
  deleteHomeWork(homeworkId){
    return this.http.delete(`api/homework/${homeworkId}`).pipe(map((res: any) => res));
  }

}
