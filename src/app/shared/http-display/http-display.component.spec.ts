import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDisplayComponent } from './http-display.component';

describe('HttpDisplayComponent', () => {
  let component: HttpDisplayComponent;
  let fixture: ComponentFixture<HttpDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
