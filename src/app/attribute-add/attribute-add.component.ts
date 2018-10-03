import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from "../attribute";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attribute-add',
  templateUrl: './attribute-add.component.html',
  styleUrls: ['./attribute-add.component.scss']
})
export class AttributeAddComponent implements OnInit {

  model: any = {};
  constructor(
    private data: DataService,
    private location: Location
    ) { }

  ngOnInit() {
   
  }

  add(): void{
    alert(this.model.attribute);
    this.data.addAttribute(this.model)
    .subscribe(attribute => {
      this.goBack();
    
    });
  }
  goBack(): void{
    this.location.back();
  }
}
