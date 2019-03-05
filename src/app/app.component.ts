import { Component } from '@angular/core';
import { customers } from './customers';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            [kendoGridBinding]="gridData"
            [pageSize]="3"
            [pageable]="true"
            [sortable]="true"
            [filterable]="true"
            [groupable]="true"
            [height]="510">
            <kendo-grid-column field="CompanyName" [width]="140"></kendo-grid-column>
            <kendo-grid-column field="ContactName" [width]="120"></kendo-grid-column>
            <kendo-grid-column field="City" [width]="100"></kendo-grid-column>
            <kendo-grid-column field="ContactTitle" [width]="130"></kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[] = customers;
}
