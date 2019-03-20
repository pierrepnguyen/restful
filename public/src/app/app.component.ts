import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: any = [];

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    
  }
  getTaskFromService(){
    let observable = this._httpService.getAllTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }
  buttonClick(id){
    let task = document.getElementById(id);
    task.style.visibility = "visible";
  }

}
