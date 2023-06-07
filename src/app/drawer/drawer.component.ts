import { Component } from '@angular/core';
interface Friends{
  name: string,
  img: string
}
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  focusedName:boolean = false 
  focusedMic:boolean = false 
  focusedHeadPhones:boolean = false 
  focusedGear:boolean = false 
  friends: Friends[] = [
    {img:'https://picsum.photos/199/199', name:'Ripper302'},
    {img:'https://picsum.photos/198/198', name:'Blackdels'},
    {img:'https://picsum.photos/197/197', name:'Ricardo Rivas'},
    {img:'https://picsum.photos/196/196', name:'Pedro Perez'},
    {img:'https://picsum.photos/195/195', name:'RoRi3'},
    {img:'https://picsum.photos/194/194', name:'Ximox'},
  ]
}
