import { Component } from '@angular/core';
import { FormBuilder , FormGroup, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';
  formValue!: FormGroup;
  api: any;
  employeeModelObj: any;
  constructor(private formbuilder: FormBuilder){}
  ngOnInit(): void{
    this.formValue=this.formbuilder.group({
      name:[''],
      salary:[''],
      designation:['']
    })
  }
  postEmolyeeDetails(){
    this.employeeModelObj.name=this.formValue.parent;
    this.employeeModelObj.salary=this.formValue.parent;
    this.employeeModelObj.name=this.formValue.parent;


  }
 
  
  
}
