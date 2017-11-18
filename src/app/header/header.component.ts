import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web_111';
  titleSize = 32;
  ishighlight = false;

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
  //  alert('ssss');
     this.title += ' !';
     this.titleSize += 1;
     this.ishighlight = !this.ishighlight;
  }
}
