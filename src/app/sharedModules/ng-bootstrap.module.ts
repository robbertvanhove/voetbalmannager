import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbAlertModule, NgbCollapseModule, NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        NgbCollapseModule.forRoot(),
        NgbAccordionModule.forRoot(),
        NgbModalModule.forRoot()
        
    ],
    exports: [
        NgbAlertModule,
        NgbCollapseModule,
        NgbAccordionModule
    ],
    declarations: []
})
export class NgBootstrapModule {
}