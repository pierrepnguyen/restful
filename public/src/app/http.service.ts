import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getAllTasks(){
    return this._http.get('/api/tasks');
  }
  getTask(id){
    return this._http.get(`/api/tasks/${id}`);
  }
  createTask(data:any){
    return this._http.post('/api/tasks', data);
  }
  deleteTask(id){
    return this._http.delete(`/api/tasks/${id}`);
  }
  updateTask(id, data){
    return this._http.put(`/api/tasks/${id}`, data);
  }
}
