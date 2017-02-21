import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-list-item',
  templateUrl: './ui-list-item.component.html',
  styleUrls: ['./ui-list-item.component.scss']
})
export class UiListItemComponent {

  @Input() imgUrl: string
  @Input() text: string
  @Output() clicked = new EventEmitter()

}
