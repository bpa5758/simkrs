import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPlaceholderComponent } from './nav-bar-placeholder.component';

describe('NavBarPlaceholderComponent', () => {
  let component: NavBarPlaceholderComponent;
  let fixture: ComponentFixture<NavBarPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
