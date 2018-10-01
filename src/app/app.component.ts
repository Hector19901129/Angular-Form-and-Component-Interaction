import { Component } from '@angular/core';
import { Globals } from './model/globals';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  status: string;
  title = 'ng6-proj';
  constructor(private globals: Globals, private _sharedService: SharedService){
    this.status = globals.status;
    _sharedService.changeEmitted$.subscribe(
      text =>{
        this.status = globals.status;
      }
    );
  }
  
}
