import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuevosPage } from './huevos.page';

describe('HuevosPage', () => {
  let component: HuevosPage;
  let fixture: ComponentFixture<HuevosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuevosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuevosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
