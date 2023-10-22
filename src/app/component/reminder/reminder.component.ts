import { Component } from '@angular/core';
import { Reminder } from 'src/app/model/Reminder';
import { ReminderService } from 'src/app/services/reminder.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  Reminders: Reminder[];
  rem: Reminder = new Reminder;
  

  constructor(private remServ: ReminderService){

    //this.rem.name = "pranav"
    //this.rem.title = "titll"
  this.Reminders =[];
  //this.Reminders.push(this.rem);
  this.getProducts();
}
 
ngOnInit(){

}

reminderForm = new FormGroup({
  Name: new FormControl(),
  title: new FormControl(),
  cat: new FormControl()
});

getProducts(){

  //this.remServ.getAllTestList().subscribe( data=>{
   //this.Reminders= data 
   console.log("Fetching Reminders list from server Please wait...")
   console.log(this.Reminders);
  //});

}
saveReminder(){
  this.rem = new Reminder();
  this.rem.name = this.reminderForm.get("Name")?.value;
  this.rem.title = this.reminderForm.get("title")?.value;
  this.rem.category = this.reminderForm.get("cat")?.value;
  this.rem.enable = "true";
  this.remServ.saveReminder(this.rem).subscribe();
  this.reminderForm.reset();
  this.getProducts();
  this.getProducts();

}

}
