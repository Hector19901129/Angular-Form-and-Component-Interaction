import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from "../attribute";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attribute-edit',
  templateUrl: './attribute-edit.component.html',
  styleUrls: ['./attribute-edit.component.scss']
})
export class AttributeEditComponent implements OnInit {

  @Input() attribute: Attribute;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getAttribute();
  }

  getAttribute(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.data.getAttribute(id)
    .subscribe(attribute => {
      this.attribute = attribute;
      
    });
    
  }

  save(): void{
    this.data.updateAttribute(this.attribute)
    .subscribe(() => this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}
