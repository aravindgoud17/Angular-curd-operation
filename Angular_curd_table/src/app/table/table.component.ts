import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  userGetData:any

  constructor(private _service:UserService){

  }
  userForm = new FormGroup({
    firstname: new FormControl('',[]),
    age:new FormControl('',[]),
    gmail:new FormControl('',[]),
    phn:new FormControl('',[]),
    gender:new FormControl('',[]),
  })
  ngOnInit(){
   this.getdata()
  }
getdata(){
  this._service.getData().subscribe(
    (data)=>{
      console.log(data,"fetching data")
      this.userGetData=data
    }
  )
}

deletedata(data:any){
  this._service.deleteData(data).subscribe((res)=>{
    console.log(res,"deleted data")
    this.getdata()
   
  })
}
onSubmit() {
  console.log(this.userForm.value,"form value");
}

}
