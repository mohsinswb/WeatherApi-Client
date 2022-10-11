import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorModule} from '@angular/material/paginator';
import { TeacherCardComponent } from './teacher-card/teacher-card.component';
// import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ImageChangePipe } from './image-change.pipe';
import { LoginComponent } from './login/login.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCardComponent,
    ImageChangePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
