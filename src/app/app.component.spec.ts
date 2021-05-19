import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
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
