import { Component , EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
@Output() navigatingURL = new EventEmitter<string>();

headerTitle="test1";

onNavigating(navigationName){
  this.navigatingURL.emit(navigationName);
}

}
