import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getListnews(pageNumber: number, pageSize: number){
    return this.http.get(`api/news?pageNumber=${pageNumber}&pageSize=${pageSize}`).pipe(map((res: any) => res.Payload));
  }
  createNews(data: any){
    return this.http.post('api/news', data).pipe(map((res: any) => res.Payload));
  }
  editNews(newsId, data){
    return this.http.put(`api/news/${newsId}`, data).pipe(map((res: any) => res.Payload));
  }
  deleteNews(newsId){
    return this.http.delete(`api/news/${newsId}`).pipe(map((res: any) => res.Payload));
  }
}
