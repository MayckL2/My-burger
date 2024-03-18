import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBurgerComponent } from './new-burger.component';

describe('NewBurgerComponent', () => {
  let component: NewBurgerComponent;
  let fixture: ComponentFixture<NewBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBurgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
