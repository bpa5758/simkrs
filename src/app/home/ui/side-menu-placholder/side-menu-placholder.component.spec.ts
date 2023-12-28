import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPlacholderComponent } from './side-menu-placholder.component';

describe('SideMenuPlacholderComponent', () => {
  let component: SideMenuPlacholderComponent;
  let fixture: ComponentFixture<SideMenuPlacholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuPlacholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuPlacholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
