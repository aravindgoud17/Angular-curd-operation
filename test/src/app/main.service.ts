import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private _http:HttpClient
  ) { }

  url='http://localhost:3000/posts'
  getdata(){
    console.log(this.url,"url")
    return this._http.get(this.url)
  }
  deleteData(id:any){
    return this._http.delete(this.url+'/'+id)
    
  }
  sendData(data:any): Observable<any>{
    return this._http.post(this.url,data)
  }
  updateData(id:any,data:any){

    console.log(id , 'll');
    console.log(data , 'll');
    
    return this._http.put(this.url+'/'+id,data)
  }
}
