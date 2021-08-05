import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePwdComponent } from './update-pwd.component';

describe('UpdatePwdComponent', () => {
  let component: UpdatePwdComponent;
  let fixture: ComponentFixture<UpdatePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
