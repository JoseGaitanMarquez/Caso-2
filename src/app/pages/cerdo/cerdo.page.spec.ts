import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerdoPage } from './cerdo.page';

describe('CerdoPage', () => {
  let component: CerdoPage;
  let fixture: ComponentFixture<CerdoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerdoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
