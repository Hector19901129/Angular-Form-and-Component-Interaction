import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Globals } from '../model/globals';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;
  status: string;
  constructor(private router: Router, private globals: Globals) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
   }

  ngOnInit() {
    
  }
  changeStatus(){
    alert();
  }
}
