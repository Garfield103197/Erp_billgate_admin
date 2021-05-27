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

}
