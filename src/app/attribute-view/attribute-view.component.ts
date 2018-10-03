import { Component, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attribute-view',
  templateUrl: './attribute-view.component.html',
  styleUrls: ['./attribute-view.component.scss']
})
export class AttributeViewComponent implements OnInit {

  selectedAttribute: Attribute;
  attributes: Attribute[];

  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.getAttributes();
  }

  edit(attribute: Attribute): void{
    this.selectedAttribute = attribute;
  }

  del(attribute: Attribute): void{
    this.attributes = this.attributes.filter( attr => attr !== attribute);
    this.data.deleteAttribute(attribute).subscribe();

  }

  getAttributes(): void{
    this.data.getAttributes()
    .subscribe(attributes => this.attributes = attributes);
  }

  

}
