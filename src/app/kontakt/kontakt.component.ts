import { Component, Input } from '@angular/core';
import * as UIG from '../../lib/UniqueIdGenerator.min.js';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {

  vorname = '';
  nachname = '';
  ort = '';

  id = '';

  parseError = false;


  private _kontakt: string;
  @Input()
  get kontakt(): string {
    return this._kontakt;
  }
  set kontakt(v: string) {
    this._kontakt = v;

    // String nach Komma in Array auftrennen
    const elements = v.split(',');

    // Kontrolle ob 3 Werte übergeben wurden
    if (elements.length !== 3) {
      this.parseError = true;
      return;
    }

    // Werte zuweisen
    this.vorname = elements[0].trim();
    this.nachname = elements[1].trim();
    this.ort = elements[2].trim();

    // Neue ID zuweisen
    this.id = UIG.UniqueIdGenerator.generateId('ID-');
  }


}
