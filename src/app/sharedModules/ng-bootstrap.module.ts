import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbAlertModule, NgbCollapseModule, NgbAccordionModule, NgbModalModule, NgbTooltipModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
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
        BrowserAnimationsModule,
        NgbTooltipModule.forRoot(),
        NgbProgressbarModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot()
        
    ],
    exports: [
        NgbAlertModule,
        NgbCollapseModule,
        NgbAccordionModule,
        ToastrModule,
        NgbTooltipModule,
        NgbProgressbarModule
    ],
    declarations: []
})
export class NgBootstrapModule {
}