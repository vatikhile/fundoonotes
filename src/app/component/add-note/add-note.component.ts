import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Notes } from '../../core/model/Notes/notes';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import {ViewService} from '../../core/service/viewService/view.service'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  private flag: Boolean = false;
toggle:boolean=true;
  addNote: Notes = new Notes();
  setColor: any;
  constructor(private noteservice: NoteServiceService,private view:ViewService, private dataService: UpdateServiceService, private snackbar: MatSnackBar) { }
  ngOnInit() {
}
  /*****
   @purpose:Add the new note in database after click on close button
   ******/
  addNotes() {
    console.log("wewqeg", this.addNote);
    this.show();
    console.log(this.addNote.title);
    console.log("pinn",this.addNote.isPined);
    
    
    if(this.setColor==undefined){
      this.addNote.color=""
    }
    else{
          this.addNote.color=this.setColor
        }

    this.noteservice.addNote(this.addNote).subscribe(
      (response: any) => {
        this.view.getNotes();
        console.log(response);
        // this.dataService.currentMessage;
        this.dataService.changeMessage('444')
        this.snackbar.open(
          "Note is created Successfully", "",
          { duration: 2500 }
        )

      }

    )

    this.addNote.title = null;
    this.addNote.description = null;
  }

  /*****
   @purpose:After click on small matcard it toggle the value of flag
   ******/
  show() {
    this.flag = !this.flag;
  }
  receiveColorEvent($event){
    this.setColor= $event;    
  }
  team(){
    this.toggle=false;
    this.addNote.isPined=true;

  }
  changeTeam(){
    this.toggle=true;
    this.addNote.isPined=false;
  }

}
