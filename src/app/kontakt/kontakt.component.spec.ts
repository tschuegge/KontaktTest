import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktComponent } from './kontakt.component';

describe('KontaktComponent', () => {
  let component: KontaktComponent;
  let fixture: ComponentFixture<KontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KontaktComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component kann erzeugt werden', () => {
    expect(component).toBeTruthy();
  });

  it('Kontakt wird korrekt geparst', () => {
    component.kontakt = 'Vorname,Nachname,Ort';
    expect(component.vorname).toBe('Vorname');
    expect(component.nachname).toBe('Nachname');
    expect(component.ort).toBe('Ort');
    expect(component.parseError).toBeFalsy();
  });

  it('Kontakt wird korrekt dargestellt', () => {
    component.kontakt = 'Vorname,Nachname,Ort';
    fixture.detectChanges(); // Änderungen auf die View anwenden

    const title: HTMLElement = fixture.nativeElement.querySelector('h2');
    const text: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(title.textContent).toBe('Vorname Nachname');
    expect(text.textContent).toBe('Ort');
  });

  it('Falsches Format wird erkannt', () => {
    component.kontakt = 'Falsches,Format';
    expect(component.vorname).toBe('');
    expect(component.nachname).toBe('');
    expect(component.ort).toBe('');
    expect(component.parseError).toBeTruthy();

    component.kontakt = 'Falsches,Format,2,';
    expect(component.parseError).toBeTruthy();
  });

  it('ParseError wird ausgegeben', () => {
    component.kontakt = 'Falsches,Format';
    fixture.detectChanges();

    const title: HTMLElement = fixture.nativeElement.querySelector('h2');
    const text: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(title).toBeNull(); // Titel existiert nicht
    expect(text.textContent).toContain('nicht');

    // CSS-Klasse wird gesetzt
    const parentBox: HTMLElement = fixture.nativeElement.querySelector('.parseerror');
    expect(parentBox).not.toBeNull();

  });

  it('Kontakt mit Leerzeichen wird korrekt geparst', () => {
    component.kontakt = 'Vorname , Nachname,Ort ';
    expect(component.vorname).toBe('Vorname');
    expect(component.nachname).toBe('Nachname');
    expect(component.ort).toBe('Ort');
    expect(component.parseError).toBeFalsy();
  });

  it('Beim setzen des Kontakts, wird eine neue ID vergeben', () => {
    component.kontakt = 'Vorname,Nachname,Ort';
    const id1 = component.id;
    component.kontakt = 'Vorname2,Nachname2,Ort2';
    const id2 = component.id;

    expect(id1).not.toBe(id2); // die beiden ID's dürfen nicht gleich sein
  });

});
