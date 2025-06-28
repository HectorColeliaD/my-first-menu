import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaBackgroundComponent } from './pizza-background.component';

describe('PizzaBackgroundComponent', () => {
  let component: PizzaBackgroundComponent;
  let fixture: ComponentFixture<PizzaBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
