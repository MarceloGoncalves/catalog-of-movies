import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-detail',
    templateUrl: './title-detail.component.html',
    styleUrls: [ './title-detail.component.scss']
})
export class TitleDetailComponent {

@Input() title:string;
@Input() year:string;
@Input() plot:string;

}