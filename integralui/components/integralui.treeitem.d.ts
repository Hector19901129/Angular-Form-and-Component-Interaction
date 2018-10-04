import { ElementRef, EventEmitter, QueryList } from '@angular/core';
import { IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIListItem } from './integralui.listitem';
export declare class IntegralUITreeItem extends IntegralUIListItem {
    protected elemRef: ElementRef;
    private dataService;
    protected commonService: IntegralUICommonService;
    protected baseService: IntegralUIBaseService;
    private contentAnimation;
    private numItems;
    templateData: Array<any>;
    private isExpanded;
    private expandState;
    blockElemHeight: string;
    contentElem: ElementRef;
    dragElem: ElementRef;
    blockElem: ElementRef;
    expandBoxElem: ElementRef;
    contentList: QueryList<IntegralUITreeItem>;
    private itemList;
    private eventList;
    protected parentItem: IntegralUITreeItem;
    protected blockClassName: string;
    protected expandBoxClassName: string;
    protected blockClass: Array<any>;
    protected expandBoxClass: Array<any>;
    protected isExpandBoxTouched: boolean;
    items: Array<any>;
    templateRef: any;
    expanded: boolean;
    itemClick: EventEmitter<any>;
    itemDblClick: EventEmitter<any>;
    itemRightClick: EventEmitter<any>;
    constructor(elemRef: ElementRef, dataService: IntegralUIDataService, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    onClick(e: any): void;
    onDblClick(e: any): void;
    onRightClick(e: any): void;
    itemDragOver(e: any, flag?: boolean): void;
    itemDragDrop(e: any): void;
    isBlockExpanded(): boolean;
    collapse(flag?: boolean): void;
    expand(flag?: boolean): void;
    toggle(value?: boolean, flag?: boolean): void;
    onExpandBoxMouseDown(e: any): void;
    onExpandBoxMouseUp(e: any): void;
    onExpandBoxTouchStart(e: any): void;
    toggleContent(): void;
    getComponentFromItem(item: any): any;
    getItemFromComponent(cmp: IntegralUITreeItem): any;
    getItemObject(item: any, key: string): any;
    protected isThereVisibleChildren(): boolean;
    getSize(): any;
    checkExpandBoxVisibility(): any;
    onMouseEnter(e: any): void;
    clearComponentSelection(): void;
    selectItem(): void;
    getControlStyle(): any;
    getItemDisplayMode(): any;
    refresh(): void;
    protected updateBlockClass(): void;
    getBlockClass(): any[];
    protected getGeneralClass(): string;
    protected updateExpandBoxClass(): void;
    getExpandBoxClass(): any[];
    protected getExpandBoxStyle(value: any): any;
    protected updateStyle(value: any): void;
}