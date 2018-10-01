import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Globals } from '../model/globals';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // users$: Object; 
  movement = "ticket";
  //status: string;

  @Output() onChangedStatus = new EventEmitter<boolean>();

  changeStatus(){
    this.onChangedStatus.emit();
  }

  constructor(private globals: Globals, private _sharedService: SharedService) {
    //this.status = globals.status;
   }
  
  ngOnInit() {
    //  this.data.getUsers().subscribe(
    //    data => this.users$ = data
    //  )
    
  }
  radioChangeHandler(event: any){
    this.movement = event.target.value;
  }
  ok(code: string, client: string, reference: string): void {

    code = code.trim();
    client = client.trim();
    reference = reference.trim(); 
    if (!code || !reference) {
      alert('code or reference is empty!'); 
      return;
    }
    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
    this.globals.status = "Client."+code+"-Client."+client+" | " + this.movement + " | " + reference;
    //this.status = this.globals.status;
    this._sharedService.emitChange('data');
  }
  cancel(): void{
    
  }


}
