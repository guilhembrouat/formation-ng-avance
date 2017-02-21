import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.scss']
})
export class UiListComponent {
  @Input() title: string
}
