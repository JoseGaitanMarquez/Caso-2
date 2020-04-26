import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CremaPage } from './crema.page';

describe('CremaPage', () => {
  let component: CremaPage;
  let fixture: ComponentFixture<CremaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CremaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CremaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
