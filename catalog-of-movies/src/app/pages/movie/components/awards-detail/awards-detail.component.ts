import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-awards-detail',
    templateUrl: './awards-detail.component.html',
    styleUrls: ['./awards-detail.component.scss']
})
export class AwardsDetailComponent {

    @Input() awards: string;

}