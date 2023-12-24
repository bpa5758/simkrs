import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormPlaceholderComponent } from './login-form-placeholder.component';

describe('LoginFormPlaceholderComponent', () => {
  let component: LoginFormPlaceholderComponent;
  let fixture: ComponentFixture<LoginFormPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFormPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
