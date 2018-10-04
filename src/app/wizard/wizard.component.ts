import { Component, OnInit, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions} from 'angular-tree-component';
import { IntegralUITreeView } from '../../../integralui/components/integralui.treeview';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {


  @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
  @ViewChild('treeview') treeview: IntegralUITreeView;

  public data: Array<any>;

  public treeStyle: any = {
      general: {
          normal: 'trw-combo-normal'
      }
  }

  public comboStyle: any = {
      general: {
          normal: 'trw-combo-cmb'
      },
      header: {
          general: {
              normal: 'trw-combo-cmb-header',
              hovered: 'trw-combo-cmb-header-hovered'
          }
      }
  }

  public numUpDownStyle: any = {
      general: { normal: 'trw-combo-num' }
  }

  public activeItem: any = null;
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
    // options: ITreeOptions = {
    //   displayField: 'nodeName',
    //   isExpandedField: 'expanded',
    //   idField: 'uuid',
    //   hasChildrenField: 'nodes',
    //   actionMapping: {
    //     mouse: {
    //       dblClick: (tree, node, $event) => {
    //         if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    //       }
    //     },
    //     keys: {
    //       [KEYS.ENTER]: (tree, node, $event) => {
    //         node.expandAll();
    //       }
    //     }
    //   },
    //   nodeHeight: 23,
    //   allowDrag: (node) => {
    //     return true;
    //   },
    //   allowDrop: (node) => {
    //     return true;
    //   },
    //   levelPadding: 10,
    //   useVirtualScroll: true,
    //   animateExpand: true,
    //   scrollOnActivate: true,
    //   animateSpeed: 30,
    //   animateAcceleration: 1.2,
    //   scrollContainer: document.documentElement // HTML
    // }


  constructor() { 
    this.data = [
      { 
          id: 1,
          text: "Paper/Output",
          icon: "trw-combo-icons-medium trw-combo-icon-paper",
          items: [
              { 
                  id: 11, 
                  pid: 1, 
                  text: "Paper Size: ", 
                  value: "Letter",
                  combo: [
                      { text: "16K" },
                      { text: "A4" },
                      { text: "A5" },
                      { text: "A6" },
                      { text: "B5" },
                      { text: "Envelope #10" },
                      { text: "Envelope B5" },
                      { text: "Envelope C5" },
                      { text: "Envelope DL" },
                      { text: "Envelope Monarch" },
                      { text: "Executive" },
                      { text: "Folio" },
                      { text: "Legal" },
                      { text: "Letter" }
                  ],
                  comboWidth: 180
              },
              { id: 12, pid: 1, text: "Copy Count: ", value: 1, tag: "Copy" }
          ]
      },
      { 
          id: 2,
          text: "Graphics",
          expanded: false,
          icon: "trw-combo-icons-medium trw-combo-icon-graphics",
          items: [
              { 
                  id: 21, 
                  pid: 2, 
                  text: "Print Quality: ", 
                  value: "600x600 dots per inch",
                  combo: [
                      { text: "600x600 dots per inch" },
                      { text: "300x300 dots per inch" }
                  ],
                  comboWidth: 200
              },
              { 
                  id: 22, 
                  pid: 2, 
                  text: "True Type Font: ", 
                  value: "Substitute with Device Font",
                  combo: [
                      { text: "Substitute with Device Font" },
                      { text: "Download as Soft Font" }
                  ],
                  comboWidth: 230
              },
          ]
      },
      { 
          id: 3,
          text: "Documents Options",
          icon: "trw-combo-icons-medium trw-combo-icon-tools",
          items: [
              { 
                  id: 31, 
                  pid: 3, 
                  text: "Advanced Printing Features: ", 
                  value: "Enabled",
                  combo: [
                      { text: "Enabled" },
                      { text: "Disabled" }
                  ],
                  comboWidth: 100
              },
              { 
                  id: 32, 
                  pid: 3, 
                  text: "Halftoning: ", 
                  value: "AutoSelect",
                  combo: [
                      { text: "AutoSelect" },
                      { text: "Dither 6x6" },
                      { text: "Dither 8x8" }
                  ],
                  comboWidth: 125
              },
              { 
                  id: 33, 
                  pid: 3, 
                  text: "Print Optimizations: ", 
                  value: "Enabled",
                  combo: [
                      { text: "Enabled" },
                      { text: "Disabled" }
                  ],
                  comboWidth: 100
              },
              { 
                  id: 34, 
                  pid: 3, 
                  text: "Printer Features: ", 
                  icon: "trw-combo-icons-medium trw-combo-icon-features",
                  items: [
                      { 
                          id: 341, 
                          pid: 34, 
                          text: "Optimize for: ", 
                          value: "Plain",
                          combo: [
                              { text: "Bond" },
                              { text: "Cardstock" },
                              { text: "Envelope" },
                              { text: "Heavy" },
                              { text: "Labels" },
                              { text: "Plain" },
                              { text: "Rough" },
                              { text: "Thin" },
                              { text: "Transparency" }
                          ],
                          comboWidth: 150
                      },
                      { 
                          id: 342, 
                          pid: 34, 
                          text: "Economode: ", 
                          value: "Off",
                          combo: [
                              { text: "Off" },
                              { text: "On" }
                          ],
                          comboWidth: 60
                      }
                  ]
              }
          ]
      }
   ];
  }

  ngOnInit() {
  }
  getItemIcon(item: any){
      return item.icon ? item.icon : 'trw-combo-icons-medium trw-combo-icon-empty';
  }

  onComboSelectionChanged(e: any, item: any){
      if (e.item)
          item.value = e.item.text;
  } 

  onComboClosed(e: any){
      this.activeItem = null;
  }

  getComboSelection(item: any){
      let found: any = null;

      if (item.combo)
          for (let i = 0; i < item.combo.length; i++){
              if (item.combo[i].text == item.value){
                  found = item.combo[i];
                  break;
              }
          }

      return found;
  }

  itemClicked(e: any, item: any){
      if (item.items)
          this.activeItem = null;
      else
          this.activeItem = item;
  }
}
