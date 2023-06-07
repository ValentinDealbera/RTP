import { Component } from '@angular/core';
interface bubbles {
  image: string,
  focused: boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  focused: boolean = false
  array: bubbles[] = [
    {image: 'https://picsum.photos/200/200', focused:false},
    {image: 'https://picsum.photos/201/201', focused:false},
    {image: 'https://picsum.photos/202/202', focused:false},
    {image: 'https://picsum.photos/203/203', focused:false},
  ]
}
