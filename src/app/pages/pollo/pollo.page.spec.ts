import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolloPage } from './pollo.page';

describe('PolloPage', () => {
  let component: PolloPage;
  let fixture: ComponentFixture<PolloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
