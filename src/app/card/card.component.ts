import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  focused: boolean = false
  @Input('img')img = ''
  @Input('text')text = ''
  @Input('mode')mode = ''
}
