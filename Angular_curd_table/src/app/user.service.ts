import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  url='http://localhost:3000/posts'

  getData(){
    return this._http.get(this.url)
  }
  deleteData(id:any){
    console.log(id,"id");
    
    return this._http.delete(this.url+'/'+id);
  }
}
