import { Component, ViewEncapsulation, OnInit, AfterViewInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
}
