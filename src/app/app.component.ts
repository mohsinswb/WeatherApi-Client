import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher } from './core/model/weatherapimodel/teacher';
import { WeaterapiService } from './core/services/weatherapi/weaterapi.service';
// import {MatTableDataSource} from '@angular/material/table';
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WeatherApi-Client';
  constructor(private weatherSrv:WeaterapiService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  teacher:Teacher[]=[];
 
}






