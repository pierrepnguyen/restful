import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: any = [];
  newTask: any = {
    title: '',
    description: ''
  }
  updatedTask: any = {
    title: '',
    description: ''
  }
  updateForm: boolean = false;
  selectedTaskId: String;
  getTask: any;


  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = { title: "", description: "" };
    this.getTask = { title: "", description: "" }

  }
  getAllTask(){
    let observable = this._httpService.getAllTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }
  getEditForm(id: any){
    
    this.updateForm = true;
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      this.getTask = data[0];
      console.log(this.getTask);
    })
  }
  editTask(id:any):void {
    let observable = this._httpService.updateTask(id,
      this.getTask);
      observable.subscribe(data => {
        this.getTask = {title: "", description: ""};
        this.getAllTask();
      })
  }
  onSubmit() {
    let createTask = this._httpService.createTask(this.newTask);
    createTask.subscribe(data => {
      this.newTask = { title: "", description: "" },
      this.getAllTask();
    })
  }
  deleteTask(id){
    let deleteTask = this._httpService.deleteTask(id)
      deleteTask.subscribe(data => {
        this.getAllTask();
      })
  }
}
