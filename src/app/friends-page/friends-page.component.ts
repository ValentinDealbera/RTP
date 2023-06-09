import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent {
  SearchValue:string = ''
  SetSearchValue(event:any) {    
    this.SearchValue = event?.target.value
    console.log(this.SearchValue);
  }
}
