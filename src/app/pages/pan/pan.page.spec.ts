import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanPage } from './pan.page';

describe('PanPage', () => {
  let component: PanPage;
  let fixture: ComponentFixture<PanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
