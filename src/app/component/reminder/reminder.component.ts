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
  updateRemId: any = 0;

  constructor(private remServ: ReminderService){

    //this.rem.name = "pranav"
    //this.rem.title = "titll"
  this.Reminders =[];
  //this.Reminders.push(this.rem);
  console.log("Getting reminders...")
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

  this.remServ.getAllTestList().subscribe( data=>{
   this.Reminders= data 
   console.log("Fetching Reminders list from server Please wait...")
   console.log(this.Reminders);
  });

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

}

editReminder(reminder : Reminder){
  this.updateRemId = reminder.id;
  console.log("Editing reminder :"+this.updateRemId);
  this.reminderForm.controls.Name.setValue(reminder.name);
  this.reminderForm.controls.title.setValue(reminder.title);
  this.reminderForm.controls.cat.setValue(reminder.category);
}

updateReminder(){
  if (this.updateRemId != 0) {
  console.log("Updating reminder :"+this.updateRemId);
  this.rem = new Reminder();
  this.rem.name = this.reminderForm.get("Name")?.value;
  this.rem.title = this.reminderForm.get("title")?.value;
  this.rem.category = this.reminderForm.get("cat")?.value;
  this.rem.enable = "true";
  this.remServ.saveReminder(this.rem).subscribe();
  this.reminderForm.reset();
  this.getProducts();
  this.updateRemId = 0;
  } else {
    console.log("Unable to update reminder with null id");
  }
  

}

deleteReminder(id :any){
  console.log("Deleting reminder :"+id);
  this.remServ.delReminder(id).subscribe();
  this.getProducts();
}

}
