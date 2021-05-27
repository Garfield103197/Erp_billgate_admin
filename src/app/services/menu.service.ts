import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuOfLevel(schoolLevelId, startDate){
    return this.http.get(`api/DishMenu?SchoolLevelId=${schoolLevelId}&StartDate=${startDate}`).pipe(map((res: any) => res.Payload));
  }
  uploadDishMenu(data){
    return this.http.post('api/DishMenu/upload', data).pipe(map((res: any) => res.Payload));
  }
  editDishMenu(dishMenuId, data){
    return this.http.put(`api/DishMenu/${dishMenuId}`, data).pipe(map((res: any) => res.Payload));
  }
}
