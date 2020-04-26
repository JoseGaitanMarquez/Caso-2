import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerdurasPage } from './verduras.page';

describe('VerdurasPage', () => {
  let component: VerdurasPage;
  let fixture: ComponentFixture<VerdurasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdurasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerdurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
