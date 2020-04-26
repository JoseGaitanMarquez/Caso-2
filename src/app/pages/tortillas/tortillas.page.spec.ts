import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TortillasPage } from './tortillas.page';

describe('TortillasPage', () => {
  let component: TortillasPage;
  let fixture: ComponentFixture<TortillasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortillasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TortillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
