import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-datasheet-detail',
    templateUrl: './datasheet-detail.component.html',
    styleUrls: [ './datasheet-detail.component.scss' ]
})
export class DatasheetDetailComponent {

    @Input() actors: string;
    @Input() director: string;
    @Input() writer: string;

}