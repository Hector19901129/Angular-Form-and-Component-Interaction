import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from "../attribute";
@Component({
  selector: 'app-attribute-edit',
  templateUrl: './attribute-edit.component.html',
  styleUrls: ['./attribute-edit.component.scss']
})
export class AttributeEditComponent implements OnInit {

  @Input() attribute: Attribute;

  constructor() { }

  ngOnInit() {
  }

}
