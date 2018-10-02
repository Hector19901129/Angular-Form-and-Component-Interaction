import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, fromEventPattern } from 'rxjs';
import { Globals } from '../model/globals';
import { SharedService } from '../service/shared.service';
import { Data } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Client } from '../client';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  size: number;
  error: string;
  clients: Client[]; 
  id: number;
  movement = "ticket";
  model: any = {}; 
  validClient: Client[]; 
  @Output() onChangedStatus = new EventEmitter<boolean>();
  
  changeStatus(){
    this.onChangedStatus.emit();
  }
  
  constructor(private globals: Globals, private _sharedService: SharedService, private data: DataService) {
    //this.status = globals.status;
   }
  
  ngOnInit() {
    this.error = "";
    this.getClients();
  }

  getClients(): void{
    this.data.getClients()
    .subscribe(clients => this.clients = clients);
  }
  radioChangeHandler(event: any){
    this.movement = event.target.value;
  }
  ok(): void {
    //reference = reference.trim(); 
    this.data.searchCode(this.model.code)
    .subscribe(client => {
      this.size = client.length;
      this.validClient = client;
      if(this.size == 0){
        this.error = "Your Code is not valid. Retry!";
        
      }
      else{
        this.error = "";
        this.model.client = client[0].name;
        this.globals.status = "Client."+this.model.code+"-Client."+this.model.client+" | " + this.movement + " | " + this.model.reference;
        this._sharedService.emitChange('data');
      }
    });
    
    
    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
    
  }
  cancel(): void{
    
  }


}
