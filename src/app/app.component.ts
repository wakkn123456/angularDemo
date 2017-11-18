import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText = '';
  searchText_do = '';
  SearchText_sign= '';

  changeSearchText(value) {
    console.log(value);
     this.searchText = value;
  }
  changeSearchText_sign($event) {
    this.SearchText_sign = $event;
  }
}


