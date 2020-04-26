import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuesosPage } from './quesos.page';

describe('QuesosPage', () => {
  let component: QuesosPage;
  let fixture: ComponentFixture<QuesosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuesosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
