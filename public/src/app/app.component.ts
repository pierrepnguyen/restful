import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: any = [];
  task = {
    title : '',
    description : ''
  };

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTaskFromService();
  }
  getTaskFromService(){
    let observable = this._httpService.getAllTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }
}
