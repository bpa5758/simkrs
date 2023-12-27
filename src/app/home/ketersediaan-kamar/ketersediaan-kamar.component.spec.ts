import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetersediaanKamarComponent } from './ketersediaan-kamar.component';

describe('KetersediaanKamarComponent', () => {
  let component: KetersediaanKamarComponent;
  let fixture: ComponentFixture<KetersediaanKamarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KetersediaanKamarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KetersediaanKamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
