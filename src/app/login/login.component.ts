import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, fromEventPattern, Subject } from 'rxjs';
import { Globals } from '../model/globals';
import { SharedService } from '../service/shared.service';
import { Data } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Client } from '../client';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private searchTerms = new Subject<string>();

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
        this.model.client = "";
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

  onChangeCode(): void{
    let len = this.model.code.length;
    let zeros = "";
    if(len > 0 && len < 4){
      for(var i = 0; i < 4 - len; i++){
          zeros += "0";
      }
      zeros += this.model.code;
    }

    this.data.searchCode(zeros)
    .subscribe(client => {
      this.size = client.length;
      this.validClient = client;


      if(this.size == 0){
        this.error = "Your Code is not valid. Retry!";
        this.model.client = "";
      }
      else{
        this.error = "";
        this.model.client = client[0].name;
        //this.globals.status = "Client."+this.model.code+"-Client."+this.model.client+" | " + this.movement + " | " + this.model.reference;
        //this._sharedService.emitChange('data');
      }
    });
  }

  onChangeClient(): void{
    this.data.searchClient(this.model.client)
    .subscribe(clients => {
      this.size = clients.length;
      this.validClient = clients;
      if(this.size == 0){
        this.error = "Your Client does not Exist. Retry!";
        this.model.code = "";
      }
      else{
        this.error = "";
        this.model.code = clients[0].code;
        //this.globals.status = "Client."+this.model.code+"-Client."+this.model.client+" | " + this.movement + " | " + this.model.reference;
        //this._sharedService.emitChange('data');
      }
    });



  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
