import { Component, OnInit } from '@angular/core';
import { Teacher } from '../core/model/weatherapimodel/teacher';
import { WeaterapiService } from '../core/services/weatherapi/weaterapi.service';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {

  constructor(private weatherSrv:WeaterapiService) { }
      teachers :Teacher[]=[];
      public image:string ='';
  ngOnInit(): void {
    this.weatherSrv.getAllTeacher().subscribe(res=>{
      console.table(res);
      this.teachers = res;
      // this.teachers.find(res=>res?.name=='bilal');
      // this.teachers.forEach(res=>{
      //   this.getImage(res?.Image)
      // })
    })
  }

}
