import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbAlertModule, NgbCollapseModule, NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        NgbCollapseModule.forRoot(),
        NgbAccordionModule.forRoot(),
        NgbModalModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-position'
        }),
        BrowserAnimationsModule
        
    ],
    exports: [
        NgbAlertModule,
        NgbCollapseModule,
        NgbAccordionModule,
        ToastrModule
    ],
    declarations: []
})
export class NgBootstrapModule {
}