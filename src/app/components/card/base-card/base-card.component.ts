import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
    selector: 'app-base-card',
    templateUrl: './base-card.component.html',
    styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit {
    @Input() dataCard: any;
    @Output() callback = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }
}

@NgModule({
    declarations: [BaseCardComponent],
    imports: [CommonModule],
    exports: [BaseCardComponent],
})
export class BaseCardModule { }
