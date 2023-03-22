import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { SquarComponent } from './squar/squar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
}
