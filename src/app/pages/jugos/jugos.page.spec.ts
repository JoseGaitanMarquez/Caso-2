import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JugosPage } from './jugos.page';

describe('JugosPage', () => {
  let component: JugosPage;
  let fixture: ComponentFixture<JugosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JugosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
