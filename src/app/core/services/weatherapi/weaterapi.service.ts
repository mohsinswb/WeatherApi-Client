import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../../model/weatherapimodel/teacher';

@Injectable({
  providedIn: 'root'
})
export class WeaterapiService {

   apiEnd:string = 'Weathers/';
  constructor(private http:HttpClient) { }

  getAllTeacher():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(environment.apiUrl+`${this.apiEnd}`+'GetTeacher');

  }
  // getTeacherId():Observable<Teacher[]>{
  //   return this.http.get<Teacher[]>(environment.apiUrl+`${this.apiEnd}`+`GetTeacherid`);
  // }
  // addTeacher():Observable{
  //   return this.http.post(environment.apiUrl+`${this.apiEnd}`+`addTeacher`);
  // }
  // deleteTeacher():Observable{
  //   return this.http.delete(environment.apiUrl+`${this.apiEnd}`+`deleteTeacher`);
  // }
  // updateTeacher():Observable{
  //   return this.http.put(environment.apiUrl+`${this.apiEnd}`+`updateTeacher`);
  // }
}
