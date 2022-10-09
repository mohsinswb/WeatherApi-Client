import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher } from './core/model/weatherapimodel/teacher';
import { WeaterapiService } from './core/services/weatherapi/weaterapi.service';
// import {MatTableDataSource} from '@angular/material/table';
import { MatTableDataSource } from "@angular/material/table";
import { interval, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WeatherApi-Client';
  countUp = 10;
  countUp2 = 1;

  posts: any = [];

  constructor(private weatherSrv: WeaterapiService, private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.weatherSrv.getAllTeacher().subscribe(res=>{
    //   console.log(res)
    // })
    // this.http.jsonp('https://jsonplaceholder.typicode.com/posts', "callback")
    // .pipe(
    //   map((x: any )=> {
    //     return {
    //       // id: x.id, 
    //       // title: x.title
    //     }
    //   })
    // )
    //   .subscribe(x => {
    //     console.log(x)
    //     this.posts = x;
    //   });
  }
  // teacher: Teacher[] = [];

}






