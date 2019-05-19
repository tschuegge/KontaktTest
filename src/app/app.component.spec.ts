import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        KontaktComponent
      ],
    }).compileComponents();
  }));

  it('App kann erstellt werden', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
