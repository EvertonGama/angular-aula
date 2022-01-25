import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dia = moment().format('DD [de] MMMM [de] YYYY');
}
