import { ServiceService } from './../service.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { employee } from './package.1';
import { employeed } from './main';
import {
  FormGroup,  FormBuilder, FormArray, FormControl, } from '@angular/forms';


@Component({
  selector: 'app-rightcontent',
  templateUrl: './rightcontent.component.html',
  styleUrls: ['./rightcontent.component.css']
})
export class RightcontentComponent implements OnInit {
  
  employee1:employee[]= [];
  employee2:employee[]= [];
  employee3:employee[]= [];
  employee4:employee[]= [];
  employee5:employee[]= [];
  filters :string="";
  public form: FormGroup | any;



  get doneItemsFormArray(): FormArray {
    return this.form.get('doneItems') as FormArray;
  }

  
  constructor(private sService: ServiceService,private formBuilder: FormBuilder ) {
    
    this.employee1= sService.getAll1();
    this.employee2= sService.getAll2();
    this.employee3= sService.getAll3();
    this.employee4= sService.getAll4();
    this.employee5= sService.getAll5();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      doneItems: this.formBuilder.array(this.employee2)
    });
  }

  drop(event: CdkDragDrop<employeed[]>) {    
    if (event.container.id === 'employee2') {
      
      const newDoneItem = event.previousContainer.data[event.previousIndex];
      this.doneItemsFormArray.insert(event.currentIndex, new FormControl(newDoneItem));
    } else if (event.container.id === 'employee3') {
      
      const removedItem = event.previousContainer.data[event.previousIndex];      
      const test = this.doneItemsFormArray.value.findIndex((item: employeed) => item === removedItem);
      this.doneItemsFormArray.removeAt(test);
    }
    else if (event.container.id === 'employee4') {
     
      const removedItem = event.previousContainer.data[event.previousIndex];      
      const test = this.doneItemsFormArray.value.findIndex((item: employeed) => item === removedItem);
      this.doneItemsFormArray.removeAt(test);
    }
    

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
}
}