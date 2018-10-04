import { ComponentFactoryResolver, ElementRef, EventEmitter, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIHeaderItem } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIGroupBoxTags {
}
export declare class IntegralUIGroupBox extends IntegralUIBaseComponent {
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    protected expandState: string;
    protected isExpanded: boolean;
    protected isSelected: boolean;
    protected supressCallback: boolean;
    contentHeight: string;
    contentDisplay: string;
    contentOpacity: number;
    protected maxBlockHeight: number;
    controlElem: ElementRef;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    header: IntegralUIHeaderItem;
    protected parentCtrl: any;
    protected contentClassName: string;
    protected headerClassName: string;
    protected headerExpandBoxClassName: string;
    protected contentClass: Array<any>;
    protected headerBlockClass: Array<any>;
    text: string;
    icon: string;
    expandBoxType: string;
    expanded: boolean;
    selected: boolean;
    afterCollapse: EventEmitter<any>;
    afterExpand: EventEmitter<any>;
    afterSelect: EventEmitter<any>;
    beforeCollapse: EventEmitter<any>;
    beforeExpand: EventEmitter<any>;
    beforeSelect: EventEmitter<any>;
    selectedChanged: EventEmitter<any>;
    protected callBeforeEvent(value?: boolean): boolean;
    protected callAfterEvent(value?: boolean, skip?: boolean): boolean;
    constructor(commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onHeaderClick(e: any): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    protected toggleContent(): void;
    getContentHeight(): number;
    setContentHeight(value: any): void;
    getControlStyle(): any;
    protected updateContentClass(): void;
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    private updateHeaderBlockClass();
    getHeaderBlockClass(): any[];
    protected getHeaderClass(): string;
    protected getHeaderGeneralStyle(value: any): any;
    protected getHeaderStyle(value: any): {
        general: any;
        expandBox: any;
    };
    getCurrentHeaderStyle(): any;
    setOpacity(value: any): void;
    protected updateStyle(value: any): void;
}