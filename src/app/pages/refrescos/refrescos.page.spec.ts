import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefrescosPage } from './refrescos.page';

describe('RefrescosPage', () => {
  let component: RefrescosPage;
  let fixture: ComponentFixture<RefrescosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrescosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefrescosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
