import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts = [
    'Peter,Muster,Musterstadt',
    'Thomas,Muster,Musterhausen',
    'Isabelle,Muster,Musterstadt'
  ];
}
