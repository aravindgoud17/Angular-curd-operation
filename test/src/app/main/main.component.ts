import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  getdatas:any;
  dltuser:any;
  showform=false;
  result:any
  showupdatebtn = false;
  constructor(private _http:MainService){}

  myform = new FormGroup({
    id:new FormControl(""),
    firstname:new FormControl(""),
    age:new FormControl(""),
    gmail:new FormControl(""),
    phn:new FormControl(""),
    gender:new FormControl(""),
  })
  ngOnInit(){
    this.getuser()
  }
  getuser(){
    this._http.getdata().subscribe(
      (data)=>{
        this.getdatas=data
        // console.log(data,"total users data")
      }
    )
  }

  deleteUser(id:any){
    alert("do you want to delete user");
    this._http.deleteData(id).subscribe((res)=>{
      this.dltuser=res
      // console.log(this.dltuser,"user delete info")
      this.getuser()
    })
    // console.log(this.dltuser,"mmmmmm");
    
  }
  sendData(data:any){
     this._http.sendData(this.myform.value).subscribe((res)=>{
    // console.log(res,"post data")
    this.getuser()
    this.myform.reset()
    this.close()
   })
  }

  onSubmit() {
  // console.log(this.myform.value);
  this.sendData(this.myform.value);
  }
  editUser(data:any){
    this.showupdatebtn = true
    alert("working edit");
    this.showform=true;
    
    this.myform.patchValue({
              id:data.id,
              firstname:data.firstname,
              age:data.age,
              gmail:data.gmail,
              phn:data.phn,
              gender:data.gender
            })
    

  }
  updateUser(data:any){
    alert("working update method")
    const payload = {
            'id':this.myform.value.id,
            'firstname': this.myform.value.firstname,
            'age': this.myform.value.age,
            'gmail': this.myform.value.gmail,
            'phn': this.myform.value.phn,
            'gender': this.myform.value.gender
          }
    this._http.updateData(payload).subscribe((res)=>{
            console.log(res,"updated data")
            this.result=res;
            this.getuser()
            // JSON.stringify(this.result)
    })
    this.close() 
  }

  adduser(){
    this.showform=true;
  }
  close(){
    this.showform=false;
  }
}
