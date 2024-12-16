import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicControllerComponent } from './dynamic-controller.component';

describe('DynamicControllerComponent', () => {
  let component: DynamicControllerComponent;
  let fixture: ComponentFixture<DynamicControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
